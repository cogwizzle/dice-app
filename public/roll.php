<?php
  include 'header/header.php';
  include 'form.php';
  require_once 'roll-dice.php';

  $diceDescription = $_POST['dice-description'];

  $diceResults = $rollDice($diceDescription);
  if ($_POST['dice-description']) {
?>
<div id="results" class="mt-5">
  <div class="text-sm text-slate-500 ml-2">You rolled <?php echo $diceDescription; ?></div>
  <div class="mx-auto w-full mb-3">
    <p class="font-semibold text-xl text-center">Result</p>
    <p class="font-bold text-3xl text-center"><?php echo $diceResults['total']; ?></p>
  </div>
  <ul class="text-center">
  <?php
      $i = 0;
      foreach ($diceResults['dice'] as $die) {
        $imgSrc = '';
        switch ($die['sides']) {
          case 4:
            $imgSrc = '/icons/dice/D4.png';
            break;
          case 6:
            $imgSrc = '/icons/dice/D6.png';
            break;
          case 8:
            $imgSrc = '/icons/dice/D8.png';
            break;
          case 10:
            $imgSrc = '/icons/dice/D10.png';
            break;
          case 12:
            $imgSrc = '/icons/dice/D12.png';
            break;
          case 20:
            $imgSrc = '/icons/dice/D20.png';
            break;
          default: 
            $imgSrc = '/icons/dice/D6.png';
            break;
        }
        $i++;
  ?>
        <li class="inline-block">
          <div class="text-center w-20">
            <img class="h-10 w-10 mx-auto" src="<?php echo $imgSrc; ?>"></img>
            <div id="D<?php echo $i; ?>" name="D<?php echo $i; ?>">
              <?php echo $die['value']; ?>
            </div>
          </div>
        </li>
  <?php
      }
    }
  ?>
  </ul>
</div>
<?php include 'footer/footer.php';
