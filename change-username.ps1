# Change display name from "O D G" to "CHRIS"
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host "Changing display name to CHRIS..." -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Cyan
Write-Host ""

try {
    Get-LocalUser | Where-Object {$_.Name -eq 'O D G'} | Set-LocalUser -FullName 'CHRIS'
    Write-Host "SUCCESS! Display name changed to CHRIS" -ForegroundColor Green
    Write-Host ""
    Write-Host "Please log out and log back in to see the change." -ForegroundColor Yellow
} catch {
    Write-Host "ERROR: Could not change display name" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
