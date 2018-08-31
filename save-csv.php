<?php 

$n = htmlspecialchars($_POST['number']);
$ip = htmlspecialchars($_POST['ip']);
$b = htmlspecialchars($_POST['browser']);

if($n && $ip && $b){
	header('Content-Type: text/csv');
	header('Content-Disposition: attachment; filename="data.csv"');

	$file = fopen('php://output',"w");
	$result = fputcsv($file,'');
	if($result){
		return true;
	}else{
		return false; 
	}
	fclose($file);	
}

?>
