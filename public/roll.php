<?php
  include 'header/header.php';
  include 'index.html';
  require_once 'roll-dice.php';

  $diceDescription = $_POST['dice-description'];

  $diceResults = $rollDice($diceDescription);
  if ($_POST['dice-description']) {
?>
<div class="text-sm text-slate-500 ml-2">You rolled <?php echo $diceDescription; ?></div>
<div class="mx-auto w-full mb-3">
  <p class="font-semibold text-xl text-center">Result</p>
  <p class="font-bold text-3xl text-center"><?php echo $diceResults['total']; ?></p>
</div>
<ul class="flex flex-wrap flex-column w-100">
<?php
    $i = 0;
    foreach ($diceResults['dice'] as $die) {
      $shapeClass = '';
      switch ($die['sides']) {
        case 4:
          $shapeClass = 'fas fa-play';
          break;
        case 6:
          $shapeClass = 'fas fa-dice-d6';
          break;
        default: 
          $shapeClass = 'fas fa-dice-d20';
          break;
      }
      $i++;
?>
      <li class="flex-1 text-center pt-5">
        <div>
          <i class="h-5 w-10 fa-2xl <?php echo $shapeClass; ?>"></i>
          <div id="D<?php echo $i ?>" name="D<?php echo $i ?>">
            <?php echo $die['value']; ?>
          </div>
        </div>
      </li>
<?php
    }
  }
?>
</ul>
<?php include 'footer/footer.php';
