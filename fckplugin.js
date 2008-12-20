// Register the related command.
FCKCommands.RegisterCommand( 'WordCount', new FCKDialogCommand( 'WordCount', FCKLang.WordCountDlgTitle, FCKPlugins.Items['wordcount'].Path + 'wordcount.html', 340, 160 ) ) ;

// Create the "Plaholder" toolbar button.
var oWordCountItem = new FCKToolbarButton( 'WordCount', FCKLang.WordCountBtn ) ;
oWordCountItem.IconPath = FCKPlugins.Items['wordcount'].Path + 'wordcount.png' ;

FCKToolbarItems.RegisterItem( 'WordCount', oWordCountItem ) ;
