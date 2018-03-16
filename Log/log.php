<?php
class Log
{
    public function writeLog()
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        ini_set('display_errors', 0);
        ini_set('log_errors', 1);
        ini_set('error_log', 'log.log');
        error_reporting(E_ALL);
    }
}