var val_name1 = 'val1';
var val_name2 = 'val1';
connection.query( 'SELECT col1 , col2 , col3 FROM mytable where col1 = ? and col2 = ?', [ val_name1 , val_name2 ] );

connection.query( 'SELECT col1 , col2 , col3 FROM mytable where col1 = \''+val_name1+'\' and col2 = \''+val_name2+'\'' );
