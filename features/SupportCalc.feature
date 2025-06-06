Feature: Support for you calculator
 
  Scenario Outline: Verify support for you calculator
    Given The user goes to homepage and clicks on Support for you calculator tab
    When The user clicks on Start button
    And The user fills in Your Information form with age is <age>, recent AI is "<recentAI>", housing type is "<housingType>", property AV is "<propertyAV>", property ownership is "<propertyOwnership>", owns more than one property is "<ownsMoreThanOneProperty>"
    Then Your individual benefits sections show "<assurancePackace25>", "<assurancePackace26>"
 
    Examples:
      | age | recentAI                       | housingType      | propertyAV        | propertyOwnership | ownsMoreThanOneProperty | assurancePackace25 | assurancePackace26 |
      | 21  | $34,000 and below or No income | Private property | $21,000 and below | Rented from HDB   | Yes                     | $100               | $100               |
      # | 21  | Between $34,001 and $100,000   | Private property | $21,000 and below | Rented from HDB   | Yes                     | $100               | $100               |
      # | 21  | Above $100,000                 | Private property | $21,000 and below | Rented from HDB   | Yes                     | $100               | $100               |
      # | 21  | $34,000 and below or No income | Private property | $21,000 and below | Rented from HDB   | No                      | $600               | $250               |
      # | 21  | Between $34,001 and $100,000   | Private property | $21,000 and below | Rented from HDB   | No                      | $350               | $150               |
      # | 21  | Above $100,000                 | Private property | $21,000 and below | Rented from HDB   | No                      | $100               | $100               |