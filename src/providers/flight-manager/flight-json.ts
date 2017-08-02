let trips =  {
    "kind": "qpxExpress#tripsSearch",
    "trips": {
        "kind": "qpxexpress#tripOptions",
        "requestId": "XLjQ1SvHNjmN4Ypmr0QviU",
        "data": {
            "kind": "qpxexpress#data",
            "airport": [
                {
                    "kind": "qpxexpress#airportData",
                    "code": "BLR",
                    "city": "BLR",
                    "name": "Bengaluru Kempegowda International"
                },
                {
                    "kind": "qpxexpress#airportData",
                    "code": "BOM",
                    "city": "BOM",
                    "name": "Mumbai/Bombay Chhatrapati Shivaji Int'l"
                },
                {
                    "kind": "qpxexpress#airportData",
                    "code": "CCU",
                    "city": "CCU",
                    "name": "Kolkata Subhas Chandra Bose"
                }
            ],
            "city": [
                {
                    "kind": "qpxexpress#cityData",
                    "code": "BLR",
                    "name": "Bangalore"
                },
                {
                    "kind": "qpxexpress#cityData",
                    "code": "BOM",
                    "name": "Mumbai"
                },
                {
                    "kind": "qpxexpress#cityData",
                    "code": "CCU",
                    "name": "Calcutta"
                }
            ],
            "aircraft": [
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "319",
                    "name": "Airbus A319"
                },
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "32B",
                    "name": "Airbus A321 (Sharklets)"
                },
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "737",
                    "name": "Boeing 737"
                },
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "738",
                    "name": "Boeing 737"
                },
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "73H",
                    "name": "Boeing 737"
                }
            ],
            "tax": [
                {
                    "kind": "qpxexpress#taxData",
                    "id": "WO_001",
                    "name": "India Passenger Service Fee"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "YQ_F",
                    "name": "9W YQ surcharge"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "YR_F",
                    "name": "9W YR surcharge"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "YR_I",
                    "name": "AI YR surcharge"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "K3_004",
                    "name": "India Goods And Service Tax Interim Domestic"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "IN_001",
                    "name": "India User Development Fee Departures"
                }
            ],
            "carrier": [
                {
                    "kind": "qpxexpress#carrierData",
                    "code": "9W",
                    "name": "Jet Airways (India) Limited"
                },
                {
                    "kind": "qpxexpress#carrierData",
                    "code": "AI",
                    "name": "Air India Limited"
                },
                {
                    "kind": "qpxexpress#carrierData",
                    "code": "H1",
                    "name": "Hahn Air Systems"
                }
            ]
        },
        "tripOption": [
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR6501",
                "id": "RStAXFNKnFRUKdrAf30SuG00A",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 400,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 105,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "412"
                                },
                                "connectionDuration": 135,
                                "id": "GKcgiowF38pWXfSZ",
                                "cabin": "COACH",
                                "bookingCode": "W",
                                "bookingCodeCount": 1,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LziD8XglyOi+k1rO",
                                        "aircraft": "73H",
                                        "arrivalTime": "2017-09-19T10:40+05:30",
                                        "departureTime": "2017-09-19T08:55+05:30",
                                        "origin": "BLR",
                                        "destination": "BOM",
                                        "destinationTerminal": "2",
                                        "duration": 105,
                                        "mileage": 518,
                                        "meal": "Breakfast"
                                    }
                                ]
                            },
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 160,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "623"
                                },
                                "id": "G5JTrurV8kXdYfeO",
                                "cabin": "COACH",
                                "bookingCode": "V",
                                "bookingCodeCount": 6,
                                "marriedSegmentGroup": "1",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LoCR8vmzonPBHgvi",
                                        "aircraft": "738",
                                        "arrivalTime": "2017-09-19T15:35+05:30",
                                        "departureTime": "2017-09-19T12:55+05:30",
                                        "origin": "BOM",
                                        "destination": "CCU",
                                        "originTerminal": "2",
                                        "duration": 160,
                                        "mileage": 1034,
                                        "meal": "Lunch"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AYGGcJwhg52dufKcte81YMWYShJIjIDH0tfiJYyg+yx+Q",
                                "carrier": "9W",
                                "origin": "BLR",
                                "destination": "BOM",
                                "basisCode": "W2AT15"
                            },
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AjcukXlSuL7r6ujqqhdMFyMJCI+5ZXqQrWpvNiXPwrkSj",
                                "carrier": "9W",
                                "origin": "BOM",
                                "destination": "CCU",
                                "basisCode": "V2IPOA"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AjcukXlSuL7r6ujqqhdMFyMJCI+5ZXqQrWpvNiXPwrkSj",
                                "segmentId": "G5JTrurV8kXdYfeO"
                            },
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AYGGcJwhg52dufKcte81YMWYShJIjIDH0tfiJYyg+yx+Q",
                                "segmentId": "GKcgiowF38pWXfSZ"
                            }
                        ],
                        "baseFareTotal": "INR4150",
                        "saleFareTotal": "INR4150",
                        "saleTaxTotal": "INR2351",
                        "saleTotal": "INR6501",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 2
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR207"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR1350"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR78"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR200"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            }
                        ],
                        "fareCalculation": "BLR 9W X/BOM 849W2AT15 9W CCU Q300 2999V2IPOA INR 4148 END XT 362IN 285K3 154WO 1350YQ 200YR",
                        "latestTicketingTime": "2017-09-04T23:59-04:00",
                        "ptc": "ADT",
                        "refundable": false
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR6764",
                "id": "RStAXFNKnFRUKdrAf30SuG004",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 150,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 150,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "665"
                                },
                                "id": "GNa81JpI1eboEvjg",
                                "cabin": "COACH",
                                "bookingCode": "K",
                                "bookingCodeCount": 7,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "L+a0rEVLAnoaZ6BQ",
                                        "aircraft": "738",
                                        "arrivalTime": "2017-09-19T04:40+05:30",
                                        "departureTime": "2017-09-19T02:10+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "duration": 150,
                                        "mileage": 960,
                                        "meal": "Snack or Brunch"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AeRP6MPvXG/pPxp1gZExuUchkmS56hZSuCa3P1RwMnkyN",
                                "carrier": "9W",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "K2IPO"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AeRP6MPvXG/pPxp1gZExuUchkmS56hZSuCa3P1RwMnkyN",
                                "segmentId": "GNa81JpI1eboEvjg"
                            }
                        ],
                        "baseFareTotal": "INR4975",
                        "saleFareTotal": "INR4975",
                        "saleTaxTotal": "INR1789",
                        "saleTotal": "INR6764",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR249"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR900"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR49"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR75"
                            }
                        ],
                        "fareCalculation": "BLR 9W CCU 4975K2IPO INR 4975 END XT 362IN 298K3 154WO 900YQ 75YR",
                        "latestTicketingTime": "2017-09-18T16:39-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR6764",
                "id": "RStAXFNKnFRUKdrAf30SuG001",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 150,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 150,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "7048"
                                },
                                "id": "G5RL8S2u2vA6r8hN",
                                "cabin": "COACH",
                                "bookingCode": "K",
                                "bookingCodeCount": 7,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "L7Mlk4nTH6hiDO0r",
                                        "aircraft": "73H",
                                        "arrivalTime": "2017-09-19T10:00+05:30",
                                        "departureTime": "2017-09-19T07:30+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "duration": 150,
                                        "operatingDisclosure": "OPERATED BY JETKONNECT",
                                        "mileage": 960,
                                        "meal": "Breakfast"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AeRP6MPvXG/pPxp1gZExuUchkmS56hZSuCa3P1RwMnkyN",
                                "carrier": "9W",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "K2IPO"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AeRP6MPvXG/pPxp1gZExuUchkmS56hZSuCa3P1RwMnkyN",
                                "segmentId": "G5RL8S2u2vA6r8hN"
                            }
                        ],
                        "baseFareTotal": "INR4975",
                        "saleFareTotal": "INR4975",
                        "saleTaxTotal": "INR1789",
                        "saleTotal": "INR6764",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR249"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR900"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR49"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR75"
                            }
                        ],
                        "fareCalculation": "BLR 9W CCU 4975K2IPO INR 4975 END XT 362IN 298K3 154WO 900YQ 75YR",
                        "latestTicketingTime": "2017-09-18T21:59-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR7037",
                "id": "RStAXFNKnFRUKdrAf30SuG008",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 315,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 105,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "410"
                                },
                                "id": "G25slwtjcNLbpB7n",
                                "cabin": "COACH",
                                "bookingCode": "W",
                                "bookingCodeCount": 7,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "Ln1rfrag3giJ3m3s",
                                        "aircraft": "73H",
                                        "arrivalTime": "2017-09-19T07:30+05:30",
                                        "departureTime": "2017-09-19T05:45+05:30",
                                        "origin": "BLR",
                                        "destination": "BOM",
                                        "destinationTerminal": "2",
                                        "duration": 105,
                                        "mileage": 518,
                                        "meal": "Breakfast"
                                    }
                                ],
                                "connectionDuration": 45
                            },
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 165,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "629"
                                },
                                "id": "G9UwphqQKGrSpf4A",
                                "cabin": "COACH",
                                "bookingCode": "H",
                                "bookingCodeCount": 7,
                                "marriedSegmentGroup": "1",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "L+8kq8GSqyCim8XH",
                                        "aircraft": "738",
                                        "arrivalTime": "2017-09-19T11:00+05:30",
                                        "departureTime": "2017-09-19T08:15+05:30",
                                        "origin": "BOM",
                                        "destination": "CCU",
                                        "originTerminal": "2",
                                        "duration": 165,
                                        "mileage": 1034,
                                        "meal": "Breakfast"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AKS3LkaBuuok9zU9WNg4UW3V9NRcZsF9QG2eU2pAYHHmz",
                                "carrier": "9W",
                                "origin": "BLR",
                                "destination": "BOM",
                                "basisCode": "W2AT15B"
                            },
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AXZLDV7aq0jY5bHcxGETqQ20yk4TU6MzZ0nH46V3NOb8o",
                                "carrier": "9W",
                                "origin": "BOM",
                                "destination": "CCU",
                                "basisCode": "H2AT15A"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AKS3LkaBuuok9zU9WNg4UW3V9NRcZsF9QG2eU2pAYHHmz",
                                "segmentId": "G25slwtjcNLbpB7n"
                            },
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AXZLDV7aq0jY5bHcxGETqQ20yk4TU6MzZ0nH46V3NOb8o",
                                "segmentId": "G9UwphqQKGrSpf4A"
                            }
                        ],
                        "baseFareTotal": "INR4660",
                        "saleFareTotal": "INR4660",
                        "saleTaxTotal": "INR2377",
                        "saleTotal": "INR7037",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR233"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR1350"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR78"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR200"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            }
                        ],
                        "fareCalculation": "BLR 9W X/BOM 556W2AT15B 9W CCU Q300 3800H2AT15A INR 4656 END XT 362IN 311K3 154WO 1350YQ 200YR",
                        "latestTicketingTime": "2017-09-04T23:59-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR7331",
                "id": "RStAXFNKnFRUKdrAf30SuG009",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 335,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 90,
                                "flight": {
                                    "carrier": "AI",
                                    "number": "608"
                                },
                                "id": "Gbg5LemROBKm5NZv",
                                "cabin": "COACH",
                                "bookingCode": "S",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LRD0fIM4J-XbRnNR",
                                        "aircraft": "319",
                                        "arrivalTime": "2017-09-19T19:10+05:30",
                                        "departureTime": "2017-09-19T17:40+05:30",
                                        "origin": "BLR",
                                        "destination": "BOM",
                                        "destinationTerminal": "2",
                                        "duration": 90,
                                        "mileage": 518,
                                        "meal": "Snack or Brunch"
                                    }
                                ],
                                "connectionDuration": 100
                            },
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 145,
                                "flight": {
                                    "carrier": "AI",
                                    "number": "774"
                                },
                                "id": "G5ir0eVM2oxKHTv7",
                                "cabin": "COACH",
                                "bookingCode": "T",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "1",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LOoiZo73wwT6y8cL",
                                        "aircraft": "319",
                                        "arrivalTime": "2017-09-19T23:15+05:30",
                                        "departureTime": "2017-09-19T20:50+05:30",
                                        "origin": "BOM",
                                        "destination": "CCU",
                                        "originTerminal": "2",
                                        "duration": 145,
                                        "mileage": 1034,
                                        "meal": "Dinner"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AKGmqrJIzzSo930cSHZsXxwsjGcDyjAnwIGSZqxSFJNky",
                                "carrier": "AI",
                                "origin": "BLR",
                                "destination": "BOM",
                                "basisCode": "SAP60"
                            },
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AkRDv16Fy3C25T7zTfwx2HLqN7x5ATH4U5h8cuZgHHltG",
                                "carrier": "AI",
                                "origin": "BOM",
                                "destination": "CCU",
                                "basisCode": "TAP15B"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AkRDv16Fy3C25T7zTfwx2HLqN7x5ATH4U5h8cuZgHHltG",
                                "segmentId": "G5ir0eVM2oxKHTv7"
                            },
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AKGmqrJIzzSo930cSHZsXxwsjGcDyjAnwIGSZqxSFJNky",
                                "segmentId": "Gbg5LemROBKm5NZv"
                            }
                        ],
                        "baseFareTotal": "INR6350",
                        "saleFareTotal": "INR6350",
                        "saleTaxTotal": "INR981",
                        "saleTotal": "INR7331",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR317"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_I",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR140"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR8"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            }
                        ],
                        "fareCalculation": "BLR AI X/BOM 1750SAP60 AI CCU 4600TAP15B INR 6350 END XT 362IN 325K3 154WO 140YR",
                        "latestTicketingTime": "2017-07-21T23:59-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR8024",
                "id": "RStAXFNKnFRUKdrAf30SuG002",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 135,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 135,
                                "flight": {
                                    "carrier": "9W",
                                    "number": "661"
                                },
                                "id": "GK5v6hDKKD670dRS",
                                "cabin": "COACH",
                                "bookingCode": "S",
                                "bookingCodeCount": 7,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LWB0jFBPssWJSBTM",
                                        "aircraft": "738",
                                        "arrivalTime": "2017-09-19T17:50+05:30",
                                        "departureTime": "2017-09-19T15:35+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "duration": 135,
                                        "mileage": 960,
                                        "meal": "Snack or Brunch"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AECdY2Dwx44y7IDSFWRk0pdzyThePNGID8F/IWVC8zg+m",
                                "carrier": "9W",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "S2IPO"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AECdY2Dwx44y7IDSFWRk0pdzyThePNGID8F/IWVC8zg+m",
                                "segmentId": "GK5v6hDKKD670dRS"
                            }
                        ],
                        "baseFareTotal": "INR6175",
                        "saleFareTotal": "INR6175",
                        "saleTaxTotal": "INR1849",
                        "saleTotal": "INR8024",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR309"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR900"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR49"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR75"
                            }
                        ],
                        "fareCalculation": "BLR 9W CCU 6175S2IPO INR 6175 END XT 362IN 358K3 154WO 900YQ 75YR",
                        "latestTicketingTime": "2017-09-19T06:04-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR8544",
                "id": "RStAXFNKnFRUKdrAf30SuG003",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 145,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 145,
                                "flight": {
                                    "carrier": "AI",
                                    "number": "772"
                                },
                                "id": "G+eIEgZQ3BwWIAuG",
                                "cabin": "COACH",
                                "bookingCode": "U",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "L5p73Wj5K07ZCr6v",
                                        "aircraft": "319",
                                        "arrivalTime": "2017-09-19T13:25+05:30",
                                        "departureTime": "2017-09-19T11:00+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "duration": 145,
                                        "mileage": 960,
                                        "meal": "Snack or Brunch"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "A4HJNeE1brpf/vuf9UMBznGxnay0lYNdA4N64yrs8",
                                "carrier": "AI",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "UIP"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "A4HJNeE1brpf/vuf9UMBznGxnay0lYNdA4N64yrs8",
                                "segmentId": "G+eIEgZQ3BwWIAuG"
                            }
                        ],
                        "baseFareTotal": "INR7575",
                        "saleFareTotal": "INR7575",
                        "saleTaxTotal": "INR969",
                        "saleTotal": "INR8544",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR379"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_I",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR70"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR4"
                            }
                        ],
                        "fareCalculation": "BLR AI CCU 7575UIP INR 7575 END XT 362IN 383K3 154WO 70YR",
                        "latestTicketingTime": "2017-09-19T01:29-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR10381",
                "id": "RStAXFNKnFRUKdrAf30SuG005",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 145,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 145,
                                "flight": {
                                    "carrier": "AI",
                                    "number": "776"
                                },
                                "id": "GdRcIGbOaMPWNg4f",
                                "cabin": "COACH",
                                "bookingCode": "W",
                                "bookingCodeCount": 5,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LdDy4q3x9Jb0uyoJ",
                                        "aircraft": "32B",
                                        "arrivalTime": "2017-09-19T08:30+05:30",
                                        "departureTime": "2017-09-19T06:05+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "duration": 145,
                                        "mileage": 960,
                                        "meal": "Breakfast"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AS7XHIMvu+wdM2Tp8T7uoZm/Glu5oGlt+JPxUDo/g",
                                "carrier": "AI",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "WIP"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AS7XHIMvu+wdM2Tp8T7uoZm/Glu5oGlt+JPxUDo/g",
                                "segmentId": "GdRcIGbOaMPWNg4f"
                            }
                        ],
                        "baseFareTotal": "INR9325",
                        "saleFareTotal": "INR9325",
                        "saleTaxTotal": "INR1056",
                        "saleTotal": "INR10381",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR466"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_I",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR70"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR4"
                            }
                        ],
                        "fareCalculation": "BLR AI CCU 9325WIP INR 9325 END XT 362IN 470K3 154WO 70YR",
                        "latestTicketingTime": "2017-09-18T20:34-04:00",
                        "ptc": "ADT",
                        "refundable": true
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR12434",
                "id": "RStAXFNKnFRUKdrAf30SuG007",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 145,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 145,
                                "flight": {
                                    "carrier": "H1",
                                    "number": "9146"
                                },
                                "id": "Gt+xZ2xpCSNG05mR",
                                "cabin": "COACH",
                                "bookingCode": "L",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "L3ApL1maiC9U84Ln",
                                        "aircraft": "737",
                                        "arrivalTime": "2017-09-19T20:35+05:30",
                                        "departureTime": "2017-09-19T18:10+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "destinationTerminal": "2",
                                        "duration": 145,
                                        "operatingDisclosure": "OPERATED BY SPICEJET",
                                        "mileage": 960
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AdobFKg7z0+ib6ZYEfaIgkFkTnKcnYtZKuxEOmU5a0o4z",
                                "carrier": "H1",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "LOW63"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AdobFKg7z0+ib6ZYEfaIgkFkTnKcnYtZKuxEOmU5a0o4z",
                                "segmentId": "Gt+xZ2xpCSNG05mR"
                            }
                        ],
                        "baseFareTotal": "INR6750",
                        "saleFareTotal": "INR6750",
                        "saleTaxTotal": "INR5684",
                        "saleTotal": "INR12434",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR337"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR2050"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR231"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR2550"
                            }
                        ],
                        "fareCalculation": "BLR H1 CCU 6748LOW63 INR 6748 END XT 362IN 568K3 154WO 2050YQ 2550YR",
                        "latestTicketingTime": "2017-07-18T15:14-04:00",
                        "ptc": "ADT"
                    }
                ]
            },
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "INR12434",
                "id": "RStAXFNKnFRUKdrAf30SuG006",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 140,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 140,
                                "flight": {
                                    "carrier": "H1",
                                    "number": "9177"
                                },
                                "id": "GmmSpH7pgUUPATU7",
                                "cabin": "COACH",
                                "bookingCode": "L",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "Li10Um3Pgh8n6kEy",
                                        "aircraft": "737",
                                        "arrivalTime": "2017-09-19T13:00+05:30",
                                        "departureTime": "2017-09-19T10:40+05:30",
                                        "origin": "BLR",
                                        "destination": "CCU",
                                        "destinationTerminal": "2",
                                        "duration": 140,
                                        "operatingDisclosure": "OPERATED BY SPICEJET",
                                        "mileage": 960
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "AdobFKg7z0+ib6ZYEfaIgkFkTnKcnYtZKuxEOmU5a0o4z",
                                "carrier": "H1",
                                "origin": "BLR",
                                "destination": "CCU",
                                "basisCode": "LOW63"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "AdobFKg7z0+ib6ZYEfaIgkFkTnKcnYtZKuxEOmU5a0o4z",
                                "segmentId": "GmmSpH7pgUUPATU7"
                            }
                        ],
                        "baseFareTotal": "INR6750",
                        "saleFareTotal": "INR6750",
                        "saleTaxTotal": "INR5684",
                        "saleTotal": "INR12434",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR337"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "IN_001",
                                "chargeType": "GOVERNMENT",
                                "code": "IN",
                                "country": "IN",
                                "salePrice": "INR362"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "WO_001",
                                "chargeType": "GOVERNMENT",
                                "code": "WO",
                                "country": "IN",
                                "salePrice": "INR154"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YQ_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YQ",
                                "salePrice": "INR2050"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "K3_004",
                                "chargeType": "GOVERNMENT",
                                "code": "K3",
                                "country": "IN",
                                "salePrice": "INR231"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "YR_F",
                                "chargeType": "CARRIER_SURCHARGE",
                                "code": "YR",
                                "salePrice": "INR2550"
                            }
                        ],
                        "fareCalculation": "BLR H1 CCU 6748LOW63 INR 6748 END XT 362IN 568K3 154WO 2050YQ 2550YR",
                        "latestTicketingTime": "2017-07-18T15:14-04:00",
                        "ptc": "ADT"
                    }
                ]
            }
        ]
    }
};
export default trips;
