<?php
  $vendorDir = __DIR__ . '/vendor/';
  require $vendorDir . 'jifish/ezdice/ezdice.php';
  include 'index.php';

  $diceDescription = $_POST['dice-description'];
  $diceBag = new ezdice\EZDice();
  $diceBag->roll(str_replace(' ', '', $diceDescription));

  if ($_POST['dice-description']) {
?>
  <div><?php echo $diceDescription; ?></div>
<div>Total:</div>
<?php
    echo $diceBag->getTotal() . '<br>';
?>
<div>Rolls:</div>
<?php
    foreach ($diceBag->getDiceStates() as $die) {
      echo $die['value'] . ' ';
    }
  }
