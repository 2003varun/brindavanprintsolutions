$ErrorActionPreference = "Stop"
$htmlFiles = Get-ChildItem -Path ".\*.html"

$viewportMeta = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Avoid duplicate injection
    if ($content -notmatch "viewport") {
        $content = $content -replace "(?i)</head>", "$viewportMeta`n</head>"
        [System.IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Injected viewport meta into $($file.Name)"
    } else {
        Write-Host "Viewport meta already in $($file.Name)"
    }
}
