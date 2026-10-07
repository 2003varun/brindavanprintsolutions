$ErrorActionPreference = "Stop"
$htmlFiles = Get-ChildItem -Path ".\*.html"

$headerReplacement = @"
      <div id="header">
        <div id="menu">
          <ul>
            <li><a href="index.html"> Home</a> </li>
            <li><a href="about_us.html">Company Profile</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="our_brands.html">Our Brands</a></li>
            <li><a href="contact_us.php">Contact Us</a></li>
          </ul>
        </div>
        <!-- end #menu -->
"@

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Remove Spry scripts/css
    $content = $content -replace '(?s)<script src="SpryAssets/SpryMenuBar\.js" type="text/javascript"></script>\s*', ''
    $content = $content -replace '(?s)<link href="SpryAssets/SpryMenuBarHorizontal\.css" rel="stylesheet" type="text/css" />\s*', ''
    $content = $content -replace '(?s)<script src="Scripts/AC_RunActiveContent\.js" type="text/javascript"></script>\s*', ''
    
    # Remove Spry initialization block at the bottom
    $content = $content -replace '(?s)<script type="text/javascript">\s*<!--\s*var MenuBar1 = new Spry\.Widget\.MenuBar.*?\s*//-->\s*</script>\s*', ''
    
    # Replace header table mess with clean div#menu
    $content = $content -replace '(?s)<div id="header">.*?<!-- end #menu -->', $headerReplacement

    # In index.html, remove the AC_FL_RunContent script and just keep the <object> tag
    $content = $content -replace '(?s)<script type="text/javascript">\s*AC_FL_RunContent.*?;\s*//end AC code\s*</script><noscript>', ''
    $content = $content.Replace('</noscript>', '')

    [System.IO.File]::WriteAllText($file.FullName, $content)
    Write-Host "Fixed $($file.Name)"
}
