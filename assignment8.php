<!DOCTYPE html>
<html>
    <head>
        <title>Assignment 8</title>
        <meta charset="utf-8">
        <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport">
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <link href="assets/assignment8.css" rel="stylesheet">
        <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </head>

    <body>
        <header>
            <h1>Assignment 8</h1>
            <h2>Chapter 12: Filtering and Searching</h2>
            <div class="search-wrap">
                <input id="search_input" type="text" name="search" placeholder="Search by name" oninput="generateTable()" autofocus>
            </div>
        </header>
    	<section class="content-wrap">
            <div id="table">
            </div>
       	</section>
        <footer class="filter_button">
            <button onclick="generateTable(1)" >A - M (<span class="filter-a-m-rows"></span>)</button>
            <button onclick="generateTable(2)">N - Z (<span class="filter-n-z-rows"></span>)</button>
        </footer>
    	<script src="assets/assignment8.js" ></script>
    </body>
</html>