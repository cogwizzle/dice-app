<?php
  $vendorDir = '../vendor/';
  require $vendorDir . 'jifish/ezdice/ezdice.php';
  
  $rollDice = function ($diceDescription) {
    $diceBag = new ezdice\EzDice();
    // Replace any Dice description that does not come prefixed with a number to 1D
    $diceDescription = preg_replace('/(?<!\d)(\d+)?D/', '1D', strtolower($diceDescription));
    $diceBag->roll(str_replace(' ', '', $diceDescription));
    return [
      'dice' => $diceBag->getDiceStates(),
      'total' => $diceBag->getTotal()
    ];
  };
  
