$input = "abcde";
$n = $input;
for ($i = 1; $i <= $n; $i++) {
  $val = $input[-$i];
  consolog.log($val);
}
