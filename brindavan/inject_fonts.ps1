$ErrorActionPreference = "Stop"
$htmlFiles = Get-ChildItem -Path ".\*.html"

$fontLink = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />'

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Avoid duplicate injection
    if ($content -notmatch "fonts.googleapis.com") {
        $content = $content -replace "(?i)</head>", "$fontLink`n</head>"
        [System.IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Injected Google Font into $($file.Name)"
    } else {
        Write-Host "Google Font already in $($file.Name)"
    }
}
