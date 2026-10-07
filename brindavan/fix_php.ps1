$ErrorActionPreference = "Stop"

# Rename files
if (Test-Path ".\contact_us.php") {
    Rename-Item -Path ".\contact_us.php" -NewName "contact_us.html"
}
if (Test-Path ".\thank_you.php") {
    Rename-Item -Path ".\thank_you.php" -NewName "thank_you.html"
}

# Update all html files
$htmlFiles = Get-ChildItem -Path ".\*.html"

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Replace links to contact_us.php
    $content = $content -replace "contact_us\.php", "contact_us.html"
    
    # In contact_us.html, update the form action
    if ($file.Name -eq "contact_us.html") {
        $content = $content -replace "thank_you\.php", "thank_you.html"
    }
    
    # In thank_you.html, strip out the PHP block if it exists
    if ($file.Name -eq "thank_you.html") {
        $content = $content -replace '(?s)<\?php.*?\?>\s*', ''
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
    Write-Host "Updated $($file.Name)"
}
