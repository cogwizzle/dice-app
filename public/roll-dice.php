<?php
  $vendorDir = 'vendor/';
  require $vendorDir . 'jifish/ezdice/ezdice.php';
  
  $rollDice = function ($diceDescription) {
    $diceBag = new ezdice\EzDice();
    $diceBag->roll(str_replace(' ', '', $diceDescription));
    return [
      'dice' => $diceBag->getDiceStates(),
      'total' => $diceBag->getTotal()
    ];
  };
  
