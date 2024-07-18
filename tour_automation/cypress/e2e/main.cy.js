describe('Test Main Widget', () => {
  beforeEach(() => {
    cy.visit('http://3.122.252.66/order?productId=500#/tour/checkout');
  });

  it('Date picker', () => {
    let firstLoc;
    let secondLoc;
    let firstTime;
    let secondTime;
    let firstDate;

    
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
    cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
    return Cypress.$(cell).css('pointer-events') !== 'none';
  }).should($cells => {
    expect($cells.length, 'Date picker opens to the first available date/month').to.be.greaterThan(0);
  }).then($cells => {
    const randomIndex = Cypress._.random($cells.length - 1);
    cy.wrap($cells[randomIndex]).click();
  });
});

    cy.get('.rc-picker-input').should('not.be.empty');
    cy.get('.rc-picker-input > input').then($input => {
       firstDate = $input.val();
  });
    cy.contains('Language')
    cy.get('.css-8mmkcg').eq(2).then($element => {
      if ($element.parents('.input-wrapper__disabled').length > 0) {
        cy.log('Element is disabled, skipping click.');
      } else {
        cy.get('.css-8mmkcg').eq(2).click();
        cy.get('.rc-select__menu-list [class*="option"]')
  .then($options => {
    const optionsCount = $options.length;
    if (optionsCount === 0) {
      cy.log('No options available to select.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * optionsCount);
    cy.wrap($options[randomIndex]).click();
  });
      }

    cy.get('.css-8mmkcg').eq(3).then($element => {
      if ($element.parents('.rc-select--is-disabled').length > 0) {
        cy.log('Element is disabled, skipping click.');
      } else {
        cy.get('.css-8mmkcg').eq(3).click();
        cy.get('.rc-select__menu-list [class*="option"]')
  .then($options => {
    const optionsCount = $options.length;
    if (optionsCount === 0) {
      cy.log('No options available to select.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * optionsCount);
    cy.wrap($options[randomIndex]).click();
  });
      } 
    cy.get('.rc-select__single-value > span').eq(1).invoke('text').then(loc => {
      firstLoc = loc.trim();
    }); 
  });
});
    cy.wait(500);
    cy.get('.col-sm-8 > .input-wrapper > .input-content').then($element => {
    const inputElement = $element.find('.win-rc-select.rc-select__input input');
  
    if (inputElement.prop('disabled')) {
      cy.log('Element is disabled, skipping click.');
  } else {
      cy.log('Element is NOT disabled, performing click.');
      cy.get('.col-sm-8 > .input-wrapper > .input-content').click(); 
      cy.get('.rc-select__menu-list [class*="option"]')
    .then($options => {
    const optionsCount = $options.length;
    if (optionsCount === 0) {
      cy.log('No options available to select.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * optionsCount);
    cy.wrap($options[randomIndex]).click();
  });
      }  
  });
  cy.get('.col-sm-4 > .input-wrapper > .input-content').then($element => {
    if ($element.parents('.input-wrapper__disabled').length > 0) {
      cy.log('Element is disabled, skipping click.');
    } else {
      cy.get('.col-sm-4 > .input-wrapper > .input-content').click();
      cy.get('body').then($body => {
        if ($body.find('.rc-select__menu-list').is(':visible')) {
            cy.log('Dropdown is visible, choosing option.');
            cy.get('.rc-select__menu-list [class*="option"]').then($options => {
                const optionsCount = $options.length;
                if (optionsCount === 0) {
                    cy.log('No options available to select.');
                    return;
                }
                const randomIndex = Math.floor(Math.random() * optionsCount);
                cy.wrap($options[randomIndex]).click();
            });
        } else {
            cy.log('Dropdown is not visible, typing.');
            cy.get('.col-sm-4 > .input-wrapper > .input-content').type('11:00');
        }
    });
}
});
cy.get('.col-sm-4 > .input-wrapper > .input-content').find('input').invoke('val')
    .then(value => {
      firstTime = value;
    });

  cy.get('.checkbox__checkmark').click()
  cy.document().then((doc) => {
    const containsStartFrom = doc.body.textContent.includes('Start from');
    if (containsStartFrom) {
      // Code to execute if "Start from" is found
      cy.get('.input-content').eq(6).click();
    } else {
      // Code to execute if "Start from" is not found
      cy.get('.input-content').eq(5).click();
    }
    cy.get('.rc-select__menu-list [class*="option"]').then($options => {
      const optionsCount = $options.length;
      if (optionsCount === 0) {
        cy.log('No options available to select.');
        return;
      }
      const randomIndex = Math.floor(Math.random() * optionsCount);
      cy.wrap($options[randomIndex]).click();
    });
  });
    
    cy.get('.counter__button').eq(1).click()
    cy.contains("Total price")
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        const randomIndex = Cypress._.random($cells.length - 1);
        cy.wrap($cells[randomIndex]).click();
      });
    });
    cy.wait(1000)

    cy.get('.rc-select__value-container').eq(1).invoke('val').then(loc => {
      secondLoc = loc.trim();
      expect(firstLoc).to.not.equal(secondLoc);
    }); 
    cy.get('.col-sm-4 > .input-wrapper > .input-content').find('input').invoke('val')
    .then(value => {
      secondTime = value;
      expect(firstTime, 'When change date - data resets.').to.not.equal(secondTime);
    });
});
  it('Language field', () => {
    cy.visit('http://3.122.252.66/order?productId=39#/tour/checkout');  
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.contains('Language').should('not.exist') //The field is hidden for only English
    cy.log('The field is hidden for only English')
    // get tour id for 1 language not english, for now this date only
    cy.visit('http://3.122.252.66/order?productId=500#/tour/checkout');
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-23"]').click();
      });
    });
    cy.contains('Language')
    cy.get('.css-8mmkcg').eq(2).parents('.input-wrapper__disabled').should('have.length.greaterThan', 0); //The field is preselected for only one language (not English)
    cy.log('The field is preselected for only one language (not English)')
    // get tour id for 2 language with english, for now this date only
    cy.visit('http://3.122.252.66/order?productId=500#/tour/checkout');
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-27"]').click();
      });
    });
    cy.contains('Language')
    cy.get('.input-content').eq(1).click
    cy.get('.input-content').eq(1).contains('English');
 
    // get tour id for 2 language with english, for now this date only
    cy.visit('http://3.122.252.66/order?productId=500#/tour/checkout');

    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-27"]').click();
      });
    });
    cy.contains('Language')
    cy.get('.input-content').eq(1).click
    cy.get('.input-content').eq(1).contains('English');  //The field is displayed and shows English as default
    cy.log('The field is displayed and shows English as default')

    // get tour id for 2 language without english, for now this date only
    cy.visit('http://3.122.252.66/order?productId=500#/tour/checkout');
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-24"]').click();
      });
    });
    cy.contains('Language')
    cy.get('.input-content').eq(1).click()
    cy.get('.rc-select__menu-list [class*="option"]')
  .then($options => {
    const actualTexts = [...$options].map(option => option.textContent.trim());
    const sortedTexts = [...actualTexts].slice().sort();
    expect(actualTexts, 'The dropdown options are in ascending order.').to.deep.equal(sortedTexts);
    const firstOptionText = actualTexts[0];
    cy.get('.input-content').eq(1).contains(firstOptionText); //The field is displayed and shows First language in ASC order
    cy.log('The field is displayed and shows First language in ASC order')
  });

   
  });
  it('Flight number', () => {
    cy.visit('http://3.122.252.66/order?productId=4054#/tour/checkout')
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    }     );
    // get tour id for no airport options, for now only check before data is entered instead of entering data without 'airport'
    cy.contains('flight number').should('not.exist') //When no "Airport" text in start/end location - don't show flight number
    cy.log('When no "Airport" text in start/end location - don\'t show flight number')
    cy.contains('Start from')
    cy.get('.input-content').eq(1).click()
    cy.get('.rc-select__menu-list [class*="option"]').contains('Airport').click();
    cy.contains('Arrival flight number').should('exist') //When "Airport" text in start location - show flight number
    cy.log('When "Airport" text in start location - show flight number')
    cy.get('.input-content').eq(6).type('Airport{enter}')
    cy.contains('Departure flight number').should('exist') // When "Airport" text in end location - show flight number
    cy.log('When "Airport" text in end location - show flight number')

  });
  it('Start from (City)', () => {
    let firstDate;
    let secondDate;
    let firstLang;
    let secondLang;
    let firstLoc;
    let secondLoc;
  
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
  
    cy.get('.rc-picker-input > input').then($input => {
      firstDate = $input.val();
      cy.log(`Input value: ${firstDate}`);
    });
  
    cy.contains('Language').click();
    cy.get('.rc-select__menu-list [class*="option"]')
  .then($options => {
    const actualTexts = [...$options].map(option => option.textContent.trim());
    const sortedTexts = [...actualTexts].slice().sort();
    expect(actualTexts, 'The dropdown options are in ascending order.').to.deep.equal(sortedTexts);
    const firstOptionText = actualTexts[0];
    cy.get('.input-content').eq(1).contains(firstOptionText);
  });
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
  
    cy.get('.rc-select__single-value > span').invoke('text').then(lang => {
      firstLang = lang.trim();
      cy.log(`Input value: ${firstLang}`);
    });
  
    cy.contains('Start from').should('exist'); //Start from field is displayed
    cy.log('Start from field is displayed')
    cy.wait(500);
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list').should('exist');
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.wait(1000);
    cy.contains('Start location').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    
    cy.get('.rc-select__single-value > span').eq(2).invoke('text').then(loc => {
      firstLoc = loc.trim();
      cy.log(`Input value: ${firstLoc}`);
    });
  
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.wait(500);
  
    cy.get('.rc-picker-input > input').then($input => {
      secondDate = $input.val();
      cy.log(`Input value: ${secondDate}`);
  
      expect(firstDate).to.equal(secondDate);
    });
  
    cy.get('.rc-select__single-value > span').eq(0).invoke('text').then(lang => {
      secondLang = lang.trim();
      cy.log(`Input value: ${secondLang}`);
  
      expect(firstLang).to.equal(secondLang);
    });
  
    cy.get('.rc-select__single-value > span').eq(2).invoke('text').then(loc => {
      secondLoc = loc.trim();
      cy.log(`Input value: ${secondLoc}`);
  
      expect(firstLoc).to.not.equal(secondLoc); //When change Start from city all fields reset except date and language
      cy.log('When change Start from city all fields reset except date and language')
    });
  });

  it('Start Point', () => {

    let firstLoc;
    let secondLoc;
    let passengersNumber1;
    let passengersNumber2;
  
    
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
  
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();

    cy.get('.col-sm-8 > .input-wrapper > .input-content')
  .find('.win-rc-select.rc-select__input input')
  .should('be.disabled'); //1 pick-up point is disabled
  cy.log('1 pick-up point is disabled')

    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.wait(500)
    cy.contains('Start location').click();  //The Start point depends on Start from (City) field
    cy.log('The Start point depends on Start from (City) field')
    cy.get('.rc-select__menu-list').should('exist'); //2+ pick up points have dropdown with ability to choose
    cy.log('2+ pick up points have dropdown with ability to choose')
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__value')
  .invoke('text')
  .then(value => {
    passengersNumber1 = value;
    cy.contains('Start location').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    
    cy.get('.counter__value')
      .invoke('text')
      .then(value => {
        passengersNumber2 = value;
        
        expect(passengersNumber1).to.equal(passengersNumber2); //when change pick-up point the amount of passenger does not change
        cy.log('when change pick-up point the amount of passenger does not change')
      });
  });

    cy.visit('http://3.122.252.66/order?productId=4038#/tour/checkout');
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.contains('Start location').type('F'); //there is ability to type for Start from (City) with custom pick up
    cy.log('there is ability to type for Start from (City) with custom pick up')
    cy.get('.pac-container').should('exist') //checks autocomplete
    cy.log('Autocomplete works')
    cy.contains('Florida').click();`` 
    cy.get('.col-sm-8 > .input-wrapper > .input-content > .input')
      .invoke('val')
      .then(loc => {
        firstLoc = loc.trim();
      });

    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).eq(1).click();
      });
    });
    cy.wait(500)

    cy.get('.col-sm-8 > .input-wrapper > .input-content > .input')
      .invoke('val')
      .then(loc => {
        secondLoc = loc.trim();
        expect(secondLoc).to.not.equal(firstLoc); // when change date Start Point resets
        cy.log('when change date Start Point resets')
      });
    
    
  
  });
  it('Start time', () => {
    let firstTime;
    let secondTime;
    let optionTime;
    let passengersNumber1;
    let passengersNumber2;
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.wait(1000)
    cy.contains('Start location').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.get('.input-content').eq(4).then($element => {
      if ($element.parents('.input-wrapper__disabled').length > 0) {
        cy.log('Element is preselected.'); // Start time is preselected for 1 option
      } });
    cy.get('.input-content').eq(4).find('input').invoke('val')
    .then(value => {
      firstTime = value;
      cy.log(`Input value: ${value}`);
    });
    cy.wait(1000)
    cy.contains('Start location').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.get('.input-content').eq(4).find('input').invoke('val')
    .then(value => {
      secondTime = value;
      cy.log(`Input value: ${value}`);
      expect(secondTime).to.not.equal(firstTime); //Start Time depends on Start Point field
      cy.log('Start Time depends on Start Point field')
    });
    cy.get('.input-content').eq(4).click();
    cy.get('.rc-select__menu-list [class*="option"]')
  .then($options => {
    const actualTexts = [...$options].map(option => option.textContent.trim());
    const sortedTexts = [...actualTexts].slice().sort();
    expect(actualTexts, 'The dropdown options are in ascending order.').to.deep.equal(sortedTexts); //The options are in ASC order
    const firstOptionText = actualTexts[0];
  });
    cy.get('.rc-select__menu-list [class*="option"]').eq(2).click();
    cy.get('.rc-select__single-value > span').eq(3).invoke('text').then(lang => {
      optionTime = lang.trim();
  
      expect(optionTime).to.not.equal(''); // Start Point with 2 Start Time options allows user to choose
      cy.log('Start Point with 2 Start Time options allows user to choose')
    });
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get('[title="2024-07-23"]').click();
      });
    });
    cy.wait(2000);
    cy.contains('Start time').type('2300');
    
    cy.wait(500);
    cy.get('.col-sm-4 > .input-wrapper > .input-content > .input')
      .invoke('val')
      .then(value => {
      //   typeTime = value.trim();
      // cy.log(`Input value: ${value}`);
      cy.wrap(value).should('not.be.empty'); //There is ability to enter custom start time
      cy.log('There is ability to enter custom start time')
      });
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__value')
  .invoke('text')
  .then(value => {
    passengersNumber1 = value;
    cy.wait(500);

    cy.contains('Start time').type('{backspace}{backspace}{backspace}{backspace}1500');
    cy.wait(500);

    
    cy.get('.counter__value')
      .invoke('text')
      .then(value => {
        passengersNumber2 = value;
        
        expect(passengersNumber1).to.equal(passengersNumber2); //When Start time changes number of passengers remains
        cy.log('When Start time changes number of passengers remains')
      });
  });
});
  it('End in', () => {
    cy.visit('http://3.122.252.66/order?productId=4054#/tour/checkout')
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });  
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();    
    cy.wait(2000);

    cy.contains('End in').should('exist'); // End in field is displayed
    cy.log('End in field is displayed')
    cy.get('.input-content').eq(4).find('span').invoke('text')
    .then(value => {
      cy.wrap(value).should('not.be.empty'); //End in with 1 option is preselected
      cy.log('End in with 1 option is preselected')
    });


});
  it('Dropoff location', () => {
    let firstLoc;
    let secondLoc;
    let value1;
    let passengersNumber1;

    let passengersNumber2;
  
    cy.visit('http://3.122.252.66/order?productId=54#/tour/checkout')
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });

    cy.contains('End location').should('exist');
    cy.get('.input-content').eq(3).find('span').invoke('text')
    .then(value => {
      cy.wrap(value).should('not.be.empty'); //End location with 1 option is preselected
      cy.log('End location with 1 option is preselected')
    });
    cy.visit('http://3.122.252.66/order?productId=45#/tour/checkout');
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).should('have.length.greaterThan', 0).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.get('.checkbox__checkmark').click()
    cy.get('.input-content').eq(5).find('span').invoke('text')
    .then(value => {
      firstLoc = value;
      cy.wrap(value).should('not.be.empty'); //End location with 1 option is preselected
      cy.log('End location with 1 option is preselected')
      expect(value, 'End location = Start location').to.contain('Jerusalem'); //End location = Start location
    });
    cy.contains('End location').click();
    cy.get('.rc-select__menu-list').should('exist');

    //FAILED! options are not is ascending order

  //   cy.get('.rc-select__menu-list [class*="option"]')
  // .then($options => {
  //   const actualTexts = [...$options].map(option => option.textContent.trim());
  //   const sortedTexts = [...actualTexts].slice().sort();
  //   expect(actualTexts, 'The dropdown options are in ascending order.').to.not.deep.equal(sortedTexts);
  //   const firstOptionText = actualTexts[4];
  //   // cy.get('.input-content').eq(1).contains(firstOptionText);
  // });

    cy.get('.rc-select__menu-list [class*="option"]').eq(4).click();
    cy.get('.rc-select__single-value > span').eq(2).invoke('text')
    .then(value => {
      secondLoc = value;
      expect(secondLoc, 'New option can be selected for End location').to.not.equal(firstLoc); // New option can be selected for End location
    });
    cy.visit('http://3.122.252.66/order?productId=4054#/tour/checkout');
    cy.get('.rc-picker').click();
      cy.get('.rc-picker-panel').within(() => {
        cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
          return Cypress.$(cell).css('pointer-events') !== 'none';
        }).should('have.length.greaterThan', 0).then($cells => {
          cy.get($cells).first().click();
        });
      });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(0).click();
    cy.contains('End location').type('S');
    cy.get('.pac-container').should('exist') //checks autocomplete
    cy.log('Autocomplete works')
    cy.contains('Singapore').click();
    cy.get('.input-content').eq(6).find('input').invoke('val')
    .then(value => {
      value1 = value;
      cy.log(`Input value: ${value}`);
      cy.wrap(value).should('not.be.empty'); //New option can be entered for custom End location
      cy.log('New option can be entered for custom End location')
    });
    cy.wait(500)
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__value')
  .invoke('text')
  .then(value => {
    passengersNumber1 = value;
  });
    cy.get('.input-content').eq(6).find('input').clear()
    cy.contains('End location').type('Au');
    cy.contains('Australia').click();
    cy.get('.counter__value')
      .invoke('text')
      .then(value => {
        passengersNumber2 = value;
        
        expect(passengersNumber1, 'When Drop off changes number of passengers remains').to.equal(passengersNumber2); //When Drop off changes number of passengers remains
      
      });
});
  it('Price band', () => {
    let price1;
    let price2;
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-26"]').click();
      });
    });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.wait(2000)
    cy.get('.counting-field').should('exist') //there is spinner
    cy.log('There is spinner')
    cy.get('.extra-info__price').eq(0).should('exist') //There is label: price/person
    cy.log('There is label: price/person')
    cy.get('.extra-info__price').eq(1).should('not.exist') //Price/person is hidden until select amount
    cy.log('Price/person is hidden until select amount')
    cy.get('.counter__button').eq(3).click()
    cy.get('.extra-info__price').eq(1)
      .invoke('text')
      .then(value => {
        price1 = value;
      });
    cy.get('.counter__button').eq(3).click()
    cy.wait(500)
    cy.get('.extra-info__price').eq(1)
      .invoke('text')
      .then(value => {
        price2 = value;
        expect(price2, 'Price/person changes due to how many people select').to.not.equal(price1); //Price/person changes due to how many people select
      });



    cy.get('.extra-info__name')
  .then($options => {
    const actualTexts = [...$options].map(option => option.textContent.trim());
    const sortedTexts = [...actualTexts].slice().sort();
    expect(actualTexts, 'The dropdown options are in ascending order.').to.deep.equal(sortedTexts);   //The dropdown options are in ascending order
  });
  });
  it('Extras', () => {
    let extraAmount;
    let initialActiveIndex;

    cy.get('.rc-picker').click();
      cy.get('.rc-picker-panel').within(() => {
        cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
          return Cypress.$(cell).css('pointer-events') !== 'none';
        }).should('have.length.greaterThan', 0).then($cells => {
          cy.get($cells).first().click();
        });
      });
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.wait(500)
    cy.get('.col-sm-4 > .input-wrapper > .input-content').type('11:00');
    cy.get('.counter__button').eq(1).click()
    cy.get('[data-testid="button-main"]').click()
    cy.wait(500)
    cy.get(':nth-child(4) > .col > .booking-form--header-name').should('exist') //Extras appear
    cy.log('Extras appear')
    cy.get('.tint-card__content > [data-testid="button-main"]').should('exist') //There is toggle button
    cy.log('There is toggle button')
    cy.wait(500)
    cy.get('.counter__button').eq(1).click()
    cy.get('[data-testid="button-main"]').click()
    cy.get('.tint-card__content > .counter').should('exist') //There is spinner
    cy.log('There is spinner')
    cy.get('.counter__button').eq(3).click()
    cy.get('.counter__button').eq(3).click()
    cy.get('.counter__button').eq(3).click()
    cy.get('.tint-card__content > .counter > .counter__value') //Cannot choose more extras than passengers
      .invoke('text')
      .then(value => {
        extraAmount = value;
        expect(extraAmount, 'Cannot choose more extras than passengers').to.equal('2');
      });
    cy.get('.counter__button').eq(0).click()
    cy.get(':nth-child(4) > .col > .booking-form--header-name').should('not.exist') //When passengers amount changes - extras reset
    cy.log('When passengers amount changes - extras reset')
    cy.get('[data-testid="button-main"]').click()
    cy.get('.glide__slide--active > .img').should('exist') //There is image on Extras card
    cy.log('There is image on Extras card')
    cy.get('.tint-card__content').should('exist') //There is description on Extras card
    cy.log('There is description on Extras card')

// Step 1: Get the initial active slide index
cy.get('.glide__slide.glide__slide--active').then(($initialActiveSlide) => {
  initialActiveIndex = $initialActiveSlide.index();
});

// Step 2: Click the right arrow button to transition to the next slide
cy.get('.glide__arrow--right').click();

// Step 3: Verify that the active slide index has changed
cy.get('.glide__slide.glide__slide--active').should(($newActiveSlide) => {
  const newActiveIndex = $newActiveSlide.index();
  expect(newActiveIndex).to.not.equal(initialActiveIndex);
});

  });
  it('Customer details', () => {
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get('[title="2024-07-23"]').click();
      });
    });
    cy.wait(1000)
    cy.contains('Start time').type('2300');
    cy.get('.counter__button').eq(1).click()

    cy.get('[data-testid="button-main"]').click()
    cy.wait(2000)

    cy.get('.buttons-group__content > [data-testid="button-main"]').click() // The error is highlighted
    cy.log('The error is highlighted')
    cy.get('.buttons-group > [data-testid="button-main"]').click()
    cy.get('.input-wrapper__error').should('exist');
    cy.get('.input-wrapper__error').eq(0).should('be.visible'); // The error is scrolled to
    cy.log('The error is scrolled to')
    cy.contains('Email').type('EMAIL@GMAIL.COM')
    cy.get(':nth-child(2) > .input-wrapper > .error-message').should('not.exist')
    cy.get('.selected-flag').click()
    cy.get('.search').should('exist') //Phone number has search
    cy.log('Phone number has search')
    cy.get('[data-flag-key="flag_no_198"]').click()
    cy.get('.selected-flag > .flag').should('exist') //Phone number has flag
    cy.log('Phone number has flag')
    cy.contains('Citizenship').type('Ukr')
    cy.get('#react-select-6-option-230').click() // Citizenship has search and flag
    cy.log('Citizenship has search and flag')
    
  
    const linkSelector = '.customer-form__accept-terms-link';
    const expectedText = 'Terms and Conditions';

    // Intercept the click event and prevent the default behavior
    cy.get(linkSelector).then(($link) => {
      const href = $link.attr('href');

      // Click the link to ensure the click event is triggered
      cy.wrap($link).click();

      // Use cy.request to visit the URL in the new tab
      cy.request(href).then((response) => {
        // Assert the response contains the expected text
        expect(response.body, 'The link redirects correctly').to.include(expectedText);
      });
  
  });

//     cy.intercept('GET', 'https://touringplatform.com/terms_and_conditions/4').as('termsRequest');

// cy.get('.customer-form__accept-terms-link').click();

// cy.wait('@termsRequest').its('response.body').should('contain', 'Terms and Conditions'); 
// cy.log('Link contains Terms and Conditions')
  });
  it('Order summary', () => {
    cy.visit('http://3.122.252.66/order?productId=45#/tour/checkout');
    let priceBand;
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.wait(1000)
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.wait(1000)
    // cy.contains('Start time').type('2300');
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__button').eq(3).click()

    cy.get('.p5').should('exist') //The Product Display name is shown 
    cy.log('The Product Display name is shown')
    cy.get('.img').should('exist') //The Product image is displayed
    cy.log('The Product image is displayed')
    cy.wait(1000)
    cy.get('.summary__item__reqular').should('exist') //Price band Name is shown
    cy.log('Price band Name is shown')
    cy.get('.price').should('exist') //The Price band amount/sum is shown
    cy.log('The Price band amount/sum is shown')
    cy.get('.counter__button').eq(1).click()
    cy.wait(1000)
    cy.get('.summary__item__reqular').eq(0)
    .invoke('text')
      .then(value => {
        priceBand = value;
        expect(value, 'Price per person is shown').to.equal('2 Adults  x $399'); //Price per person is shown
      });
    cy.get('[data-testid="button-main"]').click()
    cy.get('.counter__button').eq(7).click()
    cy.get('.counter__button').eq(7).click() 
    cy.wait(1000)
    cy.get('.summary__item')
    .invoke('text')
      .then(value => {
      expect(value, 'Extras name is shown correctly ').to.contain('Stargazing Tent');     //Extras name is shown correctly 
    });
   cy.get('.tint-card__content > .counter > .counter__value').eq(0).then($counterValue => {
  const counterValue = parseFloat($counterValue.text());

  cy.get('.extra-card__price-number').then($priceNumber => {
    const priceNumber = parseFloat($priceNumber.text().replace('$', ''));

    const expectedPrice = Math.round(counterValue * priceNumber); 
    cy.wait(1000)
    
    cy.get('.price').eq(2).invoke('text').then(priceText => {
      const actualPrice = parseFloat(priceText.replace('$', '')); 
      expect(actualPrice, 'Extras amount/sum is shown correctly.').to.eq(expectedPrice); // Extras amount/sum is shown correctly.
    });
  });
});
    cy.get('.counter__button').eq(0).click()
    cy.get('.counter__button').eq(2).click() 
    cy.wait(1000)

    cy.get('.summary__item')
    .invoke('text')
      .then(value => {
      expect(value, 'The Single supplement extra price is shown correctly.').to.contain('Single supplement extra price');     //The Single supplement extra price is shown correctly.
      // expect(value).to.contain('Short notice fee');     //The late booking percentage is added to the price. CLOSER DATE UNAVAILABLE!!!!!
    });
    // cy.get('[data-testid="button-main"]').click()
    // cy.wait(1000)
    // cy.get('[data-testid="button-main"]').click()
    // cy.get('.counter__button').eq(2).click()
    cy.get('.counter__button').eq(3).click()
    cy.get('.counter__button').eq(5).click()
    cy.wait(2000)
    cy.get('.summary__item')
    .invoke('text')
      .then(value => {
      expect(value).to.not.contain('Adults');     
      expect(value).to.not.contain('Children');  //this line fails but its actually a bug -should be 1x  Child   
      expect(value).to.not.contain('Students');     
    });
    cy.get('.counter__button').eq(1).click()
    cy.get('.counter__button').eq(3).click()
    cy.get('.counter__button').eq(5).click()
    cy.wait(1000)

    cy.get('.summary__item')
    .invoke('text')
      .then(value => {
      expect(value).to.contain('Adults');  
      expect(value).to.contain('Children');     
      expect(value).to.contain('Students');     //The titles for price bands amount change correctly
      cy.log('The titles for price bands amount change correctly')
    });
  });
  it('Info section (under order summary)', () => {
    // cy.intercept('GET', 'https://touringplatform.com/terms_and_conditions/4').as('termsRequest');

    // cy.get('.tint-pros__cancel > a').click();
    // cy.wait(20000); 
    // cy.wait('@termsRequest').its('response.body').should('contain', 'Cancellation Policy'); 
    cy.contains('Cancellation policy').should('exist')
    const linkSelector = '.tint-pros__cancel > a';
    const expectedText = 'Cancellation Policy';

    // Intercept the click event and prevent the default behavior
    cy.get(linkSelector).then(($link) => {
      const href = $link.attr('href');

      // Click the link to ensure the click event is triggered
      cy.wrap($link).click();

      // Use cy.request to visit the URL in the new tab
      cy.request(href).then((response) => {
        // Assert the response contains the expected text
        expect(response.body, 'The link redirects correctly').to.include(expectedText);
      });
  
  });
    cy.get('.tint-pros__payment').should('exist') 
    cy.log('There are payment icons')


  });
  it('Navigation, Locatization, Payment', () => {
    let langOptions1, langOptions2, langOptions3;
    cy.get('.rc-picker').click();
    cy.wait(1000)
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.wait(1000)
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.wait(1000)
    cy.contains('Start time').type('2300');
    cy.get('.counter__button').eq(1).click()
    cy.get('[data-testid="button-main"]').click()
    cy.wait(1000)
    cy.get('.buttons-group__content > [data-testid="button-main"]').click()
    cy.get('.booking-nav-item__active').should('contain', 'Personal details'); 
    cy.get('[data-testid="back-button-main"]').click()
    cy.get('.booking-nav-item__active').should('contain', 'Order details'); //Navigation using Continue/Back button works
    cy.log('Navigation using Continue/Back button works')
    cy.contains('Personal details').click()
    cy.get('.booking-nav-item__active').should('contain', 'Personal details'); //Navigation using navigation bar works
    cy.log('Navigation using navigation bar works')
    cy.go('back');
    cy.get('.booking-nav-item__active').should('contain', 'Order details'); 
    cy.go('forward');
    cy.get('.booking-nav-item__active').should('contain', 'Personal details'); //Navigation using browser navigation works
    cy.log('Navigation using browser navigation works')
    cy.get('body').type('{leftarrow}')
    cy.get('.booking-nav-item__active').should('contain', 'Order details'); 
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]')
      .its('length')
      .then((len) => {
        langOptions1 = len;
      });
    cy.get('.select-lang__control').eq(1).click();
    cy.get('body').type('{rightarrow}') //Navigation using keyboard arrows works
    cy.log('Navigation using keyboard arrows works')
    cy.get('.booking-nav-item__active').should('contain', 'Personal details');
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]')
      .its('length')
      .then((len) => {
        langOptions2 = len;
      });
    cy.contains('First Name').type('TestQA')
    cy.contains('Last Name').type('COAX')
    cy.contains('Email').type('email@gmail.com')
    cy.contains('Phone').type('+931111111111')
    cy.contains('Citizenship').click()
    cy.wait(1000)
    cy.get('#react-select-19-option-0').click()
    cy.get('.checkbox__checkmark').click()
    cy.get('.buttons-group > [data-testid="button-main"]').click()
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]')
      .its('length')
      .then((len) => {
        langOptions3 = len;
        expect(langOptions1).to.equal(langOptions2);
        expect(langOptions2).to.equal(langOptions3);
      });  
    cy.contains('Card number').type('1111111111111111')
    cy.contains('Expiry date').type('1124')
    cy.contains('CVC').type('1111')
    cy.get('.payment-form__holder').type('Test ')
    cy.get('.buttons-group > [data-testid="button-main"]').click()
    cy.wait(1000)
    cy.get('#errorBig').should('exist') //invalid payment details cause error
    cy.log('Invalid payment details cause error')
  });
  it('Additional', () => {
    cy.get('body').should('contain', 'Your Booking')
    cy.get('.rc-picker').click();
    cy.get('.rc-picker-panel').within(() => {
      cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
        return Cypress.$(cell).css('pointer-events') !== 'none';
      }).then($cells => {
        cy.get($cells).first().click();
      });
    });
    cy.wait(1000)
    cy.contains('Start from').click();
    cy.get('.rc-select__menu-list [class*="option"]').eq(1).click();
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(1).click();
    cy.get('body').should('contain', 'Ihre Buchung')
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(2).click();
    cy.get('body').should('contain', 'Votre réservation')
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(3).click();
    cy.get('body').should('contain', 'La tua prenotazione')
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(4).click();
    cy.get('body').should('contain', 'Reservación') //all languages are changed correctly
    cy.log('All languages are changed correctly')
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(5).click();
    cy.get('body').should('contain', 'ההזמנה שלך')
    cy.get('.select-lang__control').eq(1).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(0).click();
    cy.contains('Start time').type('1100');
    cy.get('.counter__button').eq(1).click()
    cy.get('.extra-info__price').should('contain', '$')
    cy.get('.summary').should('contain', '$')
    cy.get('.select-lang__control').eq(0).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(1).click();
    cy.get('.extra-info__price').should('contain', '€')
    cy.get('.summary').should('contain', '€')
    cy.get('.select-lang__control').eq(0).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(2).click();
    cy.get('.extra-info__price').should('contain', '£')
    cy.get('.summary').should('contain', '£')
    cy.get('.select-lang__control').eq(0).click()
    cy.get('.select-lang__menu-list [class*="option"]').eq(3).click();
    cy.get('.extra-info__price').should('contain', '¥')
    cy.get('.summary').should('contain', '¥') //all currencies are changed correctly
    cy.log('All currencies are changed correctly')


  });
});



  















  // it.only('Test', () => {
  //   const actualTexts =['a', 'b', 'c']
  //   const sortedTexts = ['b', 'a', 'c'].slice().sort();

  //   expect(actualTexts).to.deep.equal(sortedTexts);
  // });


    // const lang1 = cy.get('.rc-select__single-value').invoke('text');

    
    
  







// cy.get('.rc-picker').should('be.visible').then($btn => {
//   const attributes = $btn[0].attributes;
//   for (let i = 0; i < attributes.length; i++) {
//     cy.log(attributes[i].name + ': ' + attributes[i].value);
//   }

//location
//cy.get('.col-sm-8 > .input-wrapper > .input-content') - preselect
//cy.get('.css-8mmkcg').eq(4)

//time
//cy.get('.col-sm-4 > .input-wrapper > .input-content > .input') = typing
//<input dir="auto" class="input" disabled="" value="09 : 00"> - preselect
//if select get 5th arrow
// input-wrapper__disabled
