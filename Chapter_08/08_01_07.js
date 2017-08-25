var str = mysql.format( 'SELECT col1 , col2 , col3 FROM mytable where col1 = ? and col2 = ?', [ val_name1 , val_name2 ] );
console.log( str );
