<?php

class Curl {
    protected string $url = '';

    public function __construct(string $url) {
        $this->url = $url;
    }

    public function hitEndpoint() {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $this->url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $output = curl_exec($curl);

        if(curl_errno($curl)) {
            die('Error: ' . curl_error($curl));
        }

        curl_close($curl);
        return $output;
    }
}