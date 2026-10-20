const carDatabase = {
    "1950s": {
        "USA": {
            "Chevrolet": {
                "name": "1953 CHEVROLET CORVETTE C1", "image": "mustang.jpg",
                "speed": "40%", "accel": "35%", "handling": "30%",
                "engine": "3.9L Blue Flame Inline-6", "power": "150 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "The birth of an American sports car legend. Built with a lightweight fiberglass body, it favored cruising style over raw track racing speed."
            }
        },
        "Germany": {
            "Mercedes-Benz": {
                "name": "1954 MERCEDES-BENZ 300 SL GULLWING", "image": "mustang.jpg",
                "speed": "68%", "accel": "60%", "handling": "55%",
                "engine": "3.0L M198 Inline-6", "power": "240 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "Widely regarded as the world's very first true supercar. Famous for its iconic roof-hinged doors and advanced mechanical direct fuel injection."
            },
            "Porsche": {
                "name": "1955 PORSCHE 356 SPEEDSTER", "image": "mustang.jpg",
                "speed": "45%", "accel": "40%", "handling": "65%",
                "engine": "1.5L Flat-4 Air-Cooled", "power": "60 HP", "drivetrain": "RR Layout (RWD)",
                "desc": "A minimalist, lightweight open-top sports car built for pure driving dynamics. It set the baseline blueprint for decades of Porsche sports engineering."
            }
        },
        "Italy": {
            "Ferrari": {
                "name": "1957 FERRARI 250 TESTA ROSSA", "image": "mustang.jpg",
                "speed": "75%", "accel": "72%", "handling": "68%",
                "engine": "3.0L Colombo V12", "power": "300 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "A legendary sports racing prototype built to conquer endurance tracks like Le Mans. Highly celebrated for its distinctive pontoon-fender body style."
            }
        },
        "UK": {
            "Aston Martin": {
                "name": "1959 ASTON MARTIN DBR1", "image": "mustang.jpg",
                "speed": "76%", "accel": "74%", "handling": "70%",
                "engine": "3.0L Straight-6", "power": "254 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "The pinnacle of 1950s British sports car engineering, built exclusively for world championship sports car racing and victory at the 24 Hours of Le Mans."
            }
        }
    },
    "1960s": {
        "USA": {
            "Ford": {
                "name": "1966 FORD GT40 MK II", "image": "mustang.jpg",
                "speed": "92%", "accel": "88%", "handling": "80%",
                "engine": "7.0L Carroll Shelby V8", "power": "485 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "Built specifically to end Ferrari's dominance at endurance tracks. This purpose-built mid-engine machine swept Le Mans in historic fashion."
            }
        },
        "Germany": {
            "Porsche": {
                "name": "1964 PORSCHE 911 COUPE", "image": "mustang.jpg",
                "speed": "62%", "accel": "58%", "handling": "72%",
                "engine": "2.0L Air-Cooled Flat-6", "power": "130 HP", "drivetrain": "RR Layout (RWD)",
                "desc": "The birth of the most iconic continuous sports car line in history. It featured an air-cooled rear-engine configuration that challenged traditional racing physics."
            }
        },
        "Italy": {
            "Lamborghini": {
                "name": "1966 LAMBORGHINI MIURA P400", "image": "mustang.jpg",
                "speed": "82%", "accel": "75%", "handling": "68%",
                "engine": "3.9L Lamborghini V12", "power": "350 HP", "drivetrain": "Transverse Mid-Engine (RWD)",
                "desc": "The absolute pioneer of modern supercar engineering. It shocked the automotive industry by placing a massive V12 engine sideways behind the driver."
            }
        },
        "Japan": {
            "Toyota": {
                "name": "1967 TOYOTA 2000GT", "image": "mustang.jpg",
                "speed": "64%", "accel": "55%", "handling": "70%",
                "engine": "2.0L Yamaha Tuned Inline-6", "power": "150 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "Japan's very first high-end collectors' sports car. It completely proved that Japanese manufacturers could rival the premium styling of European sports brands."
            }
        }
    },
    "1970s": {
        "Germany": {
            "Porsche": {
                "name": "1975 PORSCHE 911 TURBO (930)", "image": "mustang.jpg",
                "speed": "85%", "accel": "80%", "handling": "74%",
                "engine": "3.0L Turbocharged Flat-6", "power": "260 HP", "drivetrain": "RR Layout (RWD)",
                "desc": "A legendary forced-induction sports vehicle nicknamed 'The Widowmaker'. Famous for explosive turbo boost spikes and extreme rear-heavy physics."
            }
        },
        "Italy": {
            "Lamborghini": {
                "name": "1974 LAMBORGHINI COUNTACH LP400", "image": "mustang.jpg",
                "speed": "84%", "accel": "70%", "handling": "55%",
                "engine": "4.0L Lamborghini V12", "power": "370 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "The geometric masterpiece that created the sharp wedge-shaped supercar design era. Its raw styling lines set the standard for supercar history."
            }
        },
        "Japan": {
            "Nissan": {
                "name": "1971 NISSAN SKYLINE 2000GT-R", "image": "mustang.jpg",
                "speed": "62%", "accel": "60%", "handling": "68%",
                "engine": "2.0L S20 Dual-Cam Inline-6", "power": "160 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "Nicknamed 'Hakosuka' (Boxy Skyline). This car formed the true performance baseline for the entire high-tech performance history of the GT-R badge."
            }
        },
        "France": {
            "Alpine": {
                "name": "1973 ALPINE A110 1600S", "image": "mustang.jpg",
                "speed": "60%", "accel": "68%", "handling": "82%",
                "engine": "1.6L Inline-4 Engine", "power": "138 HP", "drivetrain": "RR Layout (RWD)",
                "desc": "A lightweight, fiberglass French rally champion that absolutely dominated mountain circuits and secured the first World Rally Championship title."
            }
        }
    },
    "1980s": {
        "Germany": {
            "Audi": {
                "name": "1984 AUDI SPORT QUATTRO", "image": "mustang.jpg",
                "speed": "82%", "accel": "90%", "handling": "88%",
                "engine": "2.1L Turbo 5-Cylinder", "power": "306 HP", "drivetrain": "Quattro Permanent (AWD)",
                "desc": "A homologated monster built for brutal Group B rally racing. It completely revolutionized international motorsport by making all-wheel drive mandatory for racing."
            },
            "BMW": {
                "name": "1986 BMW M3 COUPE (E30)", "image": "mustang.jpg",
                "speed": "72%", "accel": "70%", "handling": "90%",
                "engine": "2.3L S14 Racing Inline-4", "power": "197 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "The benchmark touring racing machine. Developed directly for high-performance track homologation, it became iconic for handling agility."
            }
        },
        "Italy": {
            "Ferrari": {
                "name": "1987 FERRARI F40 COUPE", "image": "mustang.jpg",
                "speed": "94%", "accel": "90%", "handling": "88%",
                "engine": "2.9L Twin-Turbo V8", "power": "471 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "The final car approved by Enzo Ferrari. A completely raw street-legal track car featuring no driver safety aids or interior luxury carpet."
            }
        },
        "Japan": {
            "Toyota": {
                "name": "1986 TOYOTA COROLLA AE86 TRUENO", "image": "mustang.jpg",
                "speed": "50%", "accel": "48%", "handling": "82%",
                "engine": "1.6L 4A-GE Twin-Cam I4", "power": "128 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "A featherweight, perfectly balanced sports car. Celebrated across global street tuner culture as the absolute ultimate drift-handling training vehicle."
            }
        },
        "France": {
            "Peugeot": {
                "name": "1984 PEUGEOT 205 TURBO 16", "image": "mustang.jpg",
                "speed": "78%", "accel": "92%", "handling": "90%",
                "engine": "1.8L Turbocharged 4-Cylinder", "power": "197 HP", "drivetrain": "Mid-Engine (4WD)",
                "desc": "A legendary mid-engined rally special built to dominate Group B dirt tracks. Features massive flared arches and explosive acceleration spikes."
            },
              "Renault": {
                "name": "1980 RENAULT 5 TURBO 1", "image": "mustang.jpg",
                "speed": "75%", "accel": "88%", "handling": "85%",
                "engine": "1.4L Turbocharged Inline-4", "power": "158 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "Renault took a standard city car, ripped out the rear seats, and shoved a punchy turbo engine right behind the driver for extreme rally performance."
            }
        }
    }, // Cleanly closes the 1980s node block and opens up the next sequence
    "1990s": {
        "Japan": {
            "Nissan": {
                              "name": "1994 NISSAN SKYLINE GT-R (R32)", "image": "skyline.jpg",
                "speed": "82%", "accel": "88%", "handling": "85%",
                "engine": "2.6L RB26DETT Twin-Turbo I6", "power": "276 HP", "drivetrain": "ATTESA E-TS (AWD)",
                "desc": "Nicknamed 'Godzilla' by racing journals after shattering global touring championships. The definitive flagship matrix icon for Japanese high-tech tuning."
            },
            "Honda": {
                "name": "1992 HONDA NSX TYPE R", "image": "skyline.jpg",
                "speed": "84%", "accel": "80%", "handling": "94%",
                "engine": "3.0L VTEC Naturally-Aspirated V6", "power": "276 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "A lightweight, raw track machine tuned with feedback from racing driver Ayrton Senna. It proved Japanese engineering could beat Ferrari reliability."
            }
        },
        "UK": {
            "McLaren": {
                "name": "1992 MCLAREN F1 ROAD CAR", "image": "skyline.jpg",
                "speed": "98%", "accel": "94%", "handling": "92%",
                "engine": "6.1L BMW Custom V12", "power": "618 HP", "drivetrain": "Central Seat (RWD)",
                "desc": "Featuring a gold-lined engine bay and a unique central driver seating layout, this legendary car held the title of the absolute fastest naturally-aspirated production car."
            },
            "Lotus": {
                "name": "1996 LOTUS ELISE SERIES 1", "image": "skyline.jpg",
                "speed": "68%", "accel": "75%", "handling": "95%",
                "engine": "1.8L Rover K-Series I4", "power": "118 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "Built with an extruded aluminum chassis, it prioritized ultra-low curb weight to deliver go-kart handling and unparalleled cornering precision."
            }
        },
        "France": {
            "Venturi": {
                "name": "1995 VENTURI ATLANTIQUE 300", "image": "skyline.jpg",
                "speed": "86%", "accel": "82%", "handling": "80%",
                "engine": "3.0L Twin-Turbo V6", "power": "281 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "A beautiful boutique French supercar crafted to take on Porsche. Its sleek fiberglass lines and mid-engine twin-turbo balance made it incredibly nimble."
            }
        }
    },
    "2000s": {
        "Japan": {
            "Mitsubishi": {
                "name": "2001 MITSUBISHI LANCER EVO VII", "image": "lancer.jpg",
                "speed": "80%", "accel": "86%", "handling": "92%",
                "engine": "2.0L 4G63T Turbocharged I4", "power": "280 HP", "drivetrain": "Active Center Diff (AWD)",
                "desc": "Straight from rally motorsport heritage into early-2000s underground street racing circuits. Celebrated for high tuning limits and extreme cornering speeds."
            },
            "Lexus": {
                "name": "2009 LEXUS LFA SUPERCAR", "image": "lancer.jpg",
                "speed": "92%", "accel": "88%", "handling": "92%",
                "engine": "4.8L V10 Engine", "power": "552 HP", "drivetrain": "FR Layout (RWD)",
                "desc": "A carbon-fiber structural masterpiece famous for having the absolute fastest-revving Formula 1-style engine note in automotive history."
            }
        },
        "France": {
            "Renault": {
                "name": "2001 RENAULT CLIO V6 RS", "image": "lancer.jpg",
                "speed": "82%", "accel": "84%", "handling": "80%",
                "engine": "3.0L naturally-aspirated V6", "power": "227 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "A wide-body insanity masterpiece developed with racing engineering. It placed a heavy naturally aspirated V6 into a tiny rear-wheel drive hatchback chassis."
            }
        },
        "Italy": {
            "Pagani": {
                "name": "2002 PAGANI ZONDA C12-S", "image": "lancer.jpg",
                "speed": "96%", "accel": "92%", "handling": "90%",
                "engine": "7.3L Mercedes-AMG V12", "power": "547 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "An art-on-wheels rolling masterpiece that combined specialized Italian carbon-fiber composite materials with screaming, raw German V12 power."
            }
        }
    },
    "2010s": {
        "France": {
            "Bugatti": {
                "name": "2016 BUGATTI CHIRON HYPERCAR", "image": "lancer.jpg",
                "speed": "100%", "accel": "98%", "handling": "85%",
                "engine": "8.0L Quad-Turbo W16", "power": "1479 HP", "drivetrain": "Permanent Haldex (AWD)",
                "desc": "A heavy luxury cruise liner designed to crush speed records. A quad-turbocharged layout delivering unmatched straight-line dominance."
            },
            "Alpine": {
                "name": "2017 ALPINE A110 R", "image": "lancer.jpg",
                "speed": "80%", "accel": "85%", "handling": "94%",
                "engine": "1.8L Turbocharged I4", "power": "296 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "A track-focused evolution of the revived French icon. Utilizes matte carbon fiber panels to keep weight down for razor-sharp handling response."
            }
        },
        "South Korea": {
            "Hyundai": {
                "name": "2018 HYUNDAI i30 N PERFORMANCE", "image": "lancer.jpg",
                "speed": "70%", "accel": "72%", "handling": "80%",
                "engine": "2.0L Turbocharged I4", "power": "271 HP", "drivetrain": "Front-Wheel Drive (FWD)",
                "desc": "The definitive launchpad for South Korea's high-performance 'N' division. Tuned heavily at the Nurburgring to battle performance track hatchbacks."
            }
        },
        "Germany": {
            "Mercedes-AMG": {
                "name": "2015 MERCEDES-AMG GT S", "image": "lancer.jpg",
                "speed": "90%", "accel": "88%", "handling": "86%",
                "engine": "4.0L Twin-Turbo V8", "power": "503 HP", "drivetrain": "Front Mid-Engine (RWD)",
                "desc": "A menacing front-mid-engine grand tourer armed with a hot-inside-V twin-turbo setup, built directly out of Affalterbach to fight the 911."
            }
        }
    },
    "2020s": {
        "Croatia": {
            "Rimac": {
                "name": "2026 RIMAC NEVERA R EV", "image": "lancer.jpg",
                "speed": "100%", "accel": "100%", "handling": "96%",
                "engine": "Quad Electric Motors", "power": "2107 HP", "drivetrain": "Torque Vectoring (AWD)",
                "desc": "The peak of modern electric hypercar tech. Unleashing an insane horsepower output, this machine shatters production vehicle launch records."
            }
        },
        "Italy": {
            "Maserati": {
                "name": "2022 MASERATI MC20 SUPERCAR", "image": "lancer.jpg",
                "speed": "94%", "accel": "92%", "handling": "90%",
                "engine": "3.0L Twin-Turbo V6 Nettuno", "power": "621 HP", "drivetrain": "MR Layout (RWD)",
                "desc": "Maserati's return to the mid-engine supercar arena. Powered by an F1-derived pre-chamber combustion engine nested in an ultra-rigid carbon monocoque."
            }
        }
    }
};
