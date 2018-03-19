<?php
header('access-control-allow-origin: *');
header('access-control-allow-headers: CONTENT-TYPE');
header('access-control-allow-methods: *');
?>

<?php

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

if ($obj){
  $data = $obj['value'];
  $data_pieces = explode(" ", $data);

    if (in_array("circle", $data_pieces)) {
      if(isset($data_pieces[7])){
          echo $string = '{
              "status" : "sucess",
              "shape": "circle",
              "height": "0",
              "width": "0",
              "radius": "' .$data_pieces[7]. '",
              "side": "0"
          }';
      } else {
          echo $string = '{
            "status" : "failed",
            "error":"Incorrect Text in circle!"
          }';
      }

    } else if (in_array("square", $data_pieces)) {
      if(isset($data_pieces[8])){
          echo $string = '{
            "status" : "sucess",
              "shape": "square",
              "height": "' .$data_pieces[8]. '",
              "width": "' .$data_pieces[8]. '",
              "radius": "0",
              "side": "0"
          }';
      } else {
          echo $string = '{
            "status" : "failed",
            "error":"Incorrect Text in square!"
          }';
      }

    } else if (in_array("rectangle", $data_pieces)) {
      if(isset($data_pieces[7]) and isset($data_pieces[12])){
          echo $string = '{
            "status" : "sucess",
              "shape": "rectangle",
              "height": "' .$data_pieces[12]. '",
              "width": "' .$data_pieces[7]. '",
              "radius": "0",
              "side": "0"
          }';
      } else {
          echo $string = '{
            "status" : "failed",
            "error":"Incorrect Text in rectangle!"
          }';
      }

    } else if (in_array("octagon", $data_pieces)) {
      if(isset($data_pieces[8])){
          echo $string = '{
            "status" : "sucess",
              "shape": "octagon",
              "height": "0",
              "width": "0",
              "radius": "' .$data_pieces[8]. '",
              "side": "8"
          }';
      } else {
          echo $string = '{
            "status" : "failed",
            "error":"Incorrect Text in octagon!"
          }';
      }

    } else if (in_array("isosceles", $data_pieces)) {
      if(isset($data_pieces[8])){
          echo $string = '{
            "status" : "sucess",
              "shape": "isosceles",
              "height": "0",
              "width": "0",
              "radius": "' .$data_pieces[8]. '",
              "side": "3"
          }';
      } else {
          echo $string = '{
            "status" : "failed",
            "error":"Incorrect Text in isosceles!"
          }';
      }

    } else {
      echo $string = '{
        "status" : "failed",
        "error":"Incorrect Text!"
      }';
    }

} else {
  echo $string = '{
    "status" : "failed",
    "error":"No Data!"
  }';
}

?>
