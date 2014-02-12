<?php
require_once 'phing/Task.php';

class MyTask extends Task {
    protected $message;

    // set from the task's attribute in the XML
    public function setMessage($message) {
        $this->message = $message;
    }

    // executed when task is called
    public function main() {
        echo $this->message;
    }
}