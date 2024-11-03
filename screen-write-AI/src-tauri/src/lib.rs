// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use screenshots::Screen;
use std::io::Cursor;
use base64::engine::general_purpose::STANDARD as BASE64_STANDARD;
use base64::Engine;
use screenshots::image::ImageOutputFormat;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn capture_screenshot(x:i32, y:i32, width:u32, height:u32)->Result<String, String> {
    let screens = Screen::all().map_err(|e| e.to_string())?;

    // just taking the primary screen's shot for now ...
    // may be extended for multiple screes / monitors' screen
    let screen = screens.first().ok_or("No screen found")?;

    let image = screen
        .capture_area(x, y, width, height)
        .map_err(|e| e.to_string())?;

    // Convert the image to PNG bytes
    let mut png_data: Vec<u8> = Vec::new();
    image.write_to(&mut Cursor::new(&mut png_data), ImageOutputFormat::Png)
        .map_err(|e| e.to_string())?;
    
    // Convert to base64
    let base64_string = BASE64_STANDARD.encode(png_data);
    
    // Return the base64 string with data URL prefix
    Ok(format!("data:image/png;base64,{}", base64_string))

}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, capture_screenshot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
