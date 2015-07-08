<?php

/**
 * Script for converting CSV files describing a scenario to an 
 * application-friendly JS structure.
 * 
 * The output can then be run in nodejs to produce a JSON string.
 * 
 * -- 
 * 
 * This file is part of the focus-app-demonstrator package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * 
 */

$command = isset($argv[1]) && $argv[1] ? $argv[1] : 'help';
$params = array_slice($argv, 2);

run($command, $params);

/**
 * Entry point. This function dispatches the execution in the different tasks
 * depending on the input command and parameters
 * 
 * @param unknown $command
 * @param unknown $params
 */
function run($command, $params)
{
	if ($command === 'help') {
		display_help();
	}
	else if($command === 'build') {
		$error = "";
		if (!isset($params[0]) || !preg_match('/\.CSV$/i', $params[0]) || !is_readable($params[0])) {
			$error = 'Invalid or non-readable time-independent CSV file. ';
		} 
		if (!isset($params[1]) || !preg_match('/\.CSV$/i', $params[1]) || !is_readable($params[1])) {
			$error .= 'Invalid or non-readable time-dependent CSV file.';
		} 
		if ($error) {
			display_help($error);
		}
		else {
			build_json_scenario($params[0], $params[1]);
		}
	}
	else {
		display_help("Invalid command call");
	}
}

/**
 * Display the help message
 * 
 * @param string $is_error	Set if the help message is displayed because of 
 * a bad command line call. It then contains the error message to display.
 */
function display_help($error = FALSE)
{
	if ($error) {
		print $error . "\n\n";
	}
	
	print "Help:\n\n";
	print "\thelp\t| Display this message\n\n";
	print "\tbuild <time-independent-data.csv> <time-dependent-data.csv>\n";
	print "\t\t| Build a new JSON object describing the scenario, ready to \n";
	print "\t\t| be used in our demonstrator.\n\n";
}

/**
 * Build a JS script out of the input CSV files describing the scenario
 * 
 * @param unknown $tif	CSV file containing time-independent data 
 * @param unknown $tdf	CSV file containing time-dependent data
 */
function build_json_scenario($tif, $tdf)
{
	// import CSV data into data structures
	print 'var data = {timeindependent: {}, timedependent: {}};' . "\n";
	
	// first, let's get the time-independent data
	if (($handle = fopen($tif, 'r')) === FALSE) {
		die('Error when reading time-independent file');
	}	
	$ctr = -1;
	
	while (($row = fgetcsv($handle)) !== FALSE) {
		++$ctr;
		// ignore first (header) row
		if (!$ctr) {
			continue;
		}
		
		// only the first 2 fields are of interest: label, value
		$label = $row[0];
		$value = $row[1];
		if (!$label) {
			continue;
		}
		if ($value === '<ARRAY>') {
			$value = '[]';
		}
		else if ($value === '<OBJECT>') {
			$value = '{}';
		}
		else if ($value === '<TIME>') {
			// keep identifier for later
			// add <TIME: $label >
			// FIXME or {<TIME>: id}
			$value = '"' . str_replace('TIME', 'TIME:' . $label, $value) . '"';
		}
		else {
			$value = '"' . str_replace('"', '\"', $value) . '"';
		}
		print 'data.timeindependent.' . $label . ' = ' . $value . ";\n";
	}
	fclose($handle);
	$handle = FALSE;
	
	// then time-dependent data
	if (($handle = fopen($tdf, 'r')) === FALSE) {
		die('Error when reading time-independent file');
	}
	$ctr = -1;
	$index_field_map = array();
	$timedata = array();
	while (($row = fgetcsv($handle)) !== FALSE) {
		++$ctr;
		// the header contains the variables we want to import
		if (!$ctr) {
			$index_field_map = $row;
		}
		else {
			foreach ($row as $i => $value) {
				if (!isset($timedata[$i])) {
					$timedata[$i] = array();
				}
				array_push($timedata[$i], $value);
			}
		}
	}
	fclose($handle);
	
	foreach ($timedata as $key => $content) {
		$timedata['<TIME:' . $index_field_map[$key] . '>'] = $content;
		unset($timedata[$key]);
	}

	print 'data.timedependent = ' . json_encode($timedata) . ';';
	
	
	// JSON.stringify
	print "console.log(JSON.stringify(data));\n";	
	// parse time-independent data
	// prase time-dependent data
	
	// render
	
}
exit;


// ------------------- DEBUG FIXME
if (($handle = fopen ( "test.csv", "r" )) !== FALSE) {
	while ( ($data = fgetcsv ( $handle, 1000, "," )) !== FALSE ) {
		$num = count ( $data );
		echo "<p> $num champs à la ligne $row: <br /></p>\n";
		$row ++;
		for($c = 0; $c < $num; $c ++) {
			echo $data [$c] . "<br />\n";
		}
	}
	fclose ( $handle );
}