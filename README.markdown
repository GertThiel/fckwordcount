# FCKeditor plug-in to count the characters and words inside the editor

## Installing

Download the plug-in using git:

    cd fckeditor/editor/plugins
    git clone git://github.com/GertThiel/fckwordcount.git wordcount

Update your fckconfig like so

    var sOtherPluginPath = FCKConfig.BasePath.substr(0, FCKConfig.BasePath.length - 7) + 'editor/plugins/';
    FCKConfig.Plugins.Add( 'wordcount', 'de,en', sOtherPluginPath );

and add WordCount to atoolbar set like so

    FCKConfig.ToolbarSets["Default"] = [
                  … cut …
      ['Cut','Copy','Paste','PasteText','PasteWord','-','Print','SpellCheck','WordCount'],
                  … cut …
    ];

## Licensing

This FCKeditor WordCount plug-in is available under the [MIT open source license](http://www.opensource.org/licenses/mit-license.php).


## The MIT License

Copyright (c) 2008 Gert Thiel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


## More Information

For more information see: [FCKeditor](http://www.fckeditor.net/).
