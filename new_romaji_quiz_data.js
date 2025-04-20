const data = [
  {
    "italiano": "Mangiare",
    "romaji": "taberu",
    "frase": "Watashi wa sushi o taberu.",
    "traduzione": "Mangio sushi.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Bere",
    "romaji": "nomu",
    "frase": "Watashi wa mizu o nomu.",
    "traduzione": "Bevo acqua.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Guardare",
    "romaji": "miru",
    "frase": "Anime o miru.",
    "traduzione": "Guardo anime.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      }
    }
  },
  {
    "italiano": "Anime",
    "romaji": "anime",
    "frase": "Anime wa tanoshii.",
    "traduzione": "Gli anime sono divertenti.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      }
    }
  },
  {
    "italiano": "Acqua",
    "romaji": "mizu",
    "frase": "Mizu wa tsumetai.",
    "traduzione": "L'acqua è fredda.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      }
    }
  },
  {
    "italiano": "Andare",
    "romaji": "iku",
    "frase": "Watashi wa gakkou ni iku.",
    "traduzione": "Vado a scuola.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'."
      }
    }
  },
  {
    "italiano": "Scuola",
    "romaji": "gakkou",
    "frase": "Gakkou wa ookii.",
    "traduzione": "La scuola è grande.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Amico",
    "romaji": "tomodachi",
    "frase": "Tomodachi wa yasashii.",
    "traduzione": "L'amico è gentile.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Giocare",
    "romaji": "asobu",
    "frase": "Kodomo wa asobu.",
    "traduzione": "I bambini giocano.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Divertente",
    "romaji": "tanoshii",
    "frase": "Asobi wa tanoshii.",
    "traduzione": "Giocare è divertente.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Parlare",
    "romaji": "hanasu",
    "frase": "Watashi wa sensei to hanasu.",
    "traduzione": "Parlo con l'insegnante.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "to": {
        "descrizione": "Particella di accompagnamento.",
        "uso": "Indica con chi si fa qualcosa.",
        "esempio": "Tomodachi to hanasu.",
        "nota": "Si scrive と e si legge 'to'."
      }
    }
  },
  {
    "italiano": "Ascoltare",
    "romaji": "kiku",
    "frase": "Watashi wa ongaku o kiku.",
    "traduzione": "Ascolto musica.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'."
      }
    }
  },
  {
    "italiano": "Insegnante",
    "romaji": "sensei",
    "frase": "Sensei wa shinsetsu desu.",
    "traduzione": "L'insegnante è gentile.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      }
    }
  },
  {
    "italiano": "Oggi",
    "romaji": "kyou",
    "frase": "Kyou wa benkyou suru.",
    "traduzione": "Oggi studio.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Musica",
    "romaji": "ongaku",
    "frase": "Ongaku wa suki desu.",
    "traduzione": "Mi piace la musica.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'."
      }
    }
  },
  {
    "italiano": "Studiare",
    "romaji": "benkyou",
    "frase": "Watashi wa nihongo o benkyou suru.",
    "traduzione": "Studio giapponese.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      }
    }
  },
  {
    "italiano": "Orologio",
    "romaji": "tokei",
    "frase": "Tokei ga arimasu.",
    "traduzione": "C'è un orologio.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ga": {
        "descrizione": "Particella del soggetto.",
        "uso": "Indica il soggetto della frase.",
        "esempio": "Kare ga kuru.",
        "nota": "Si scrive が e si legge 'ga'."
      }
    }
  },
  {
    "italiano": "Casa",
    "romaji": "ie",
    "frase": "Watashi wa ie ni kaeru.",
    "traduzione": "Torno a casa.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      }
    }
  },
  {
    "italiano": "Treno",
    "romaji": "densha",
    "frase": "Densha de iku.",
    "traduzione": "Vado in treno.",
    "spiegazioni": {}
  },
  {
    "italiano": "Con un amico",
    "romaji": "tomodachi to",
    "frase": "Tomodachi to asobu.",
    "traduzione": "Gioco con un amico.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "to": {
        "descrizione": "Particella di accompagnamento.",
        "uso": "Indica con chi si fa qualcosa.",
        "esempio": "Tomodachi to hanasu.",
        "nota": "Si scrive と e si legge 'to'."
      }
    }
  },
  {
    "italiano": "Cucinare",
    "romaji": "ryouri",
    "frase": "Watashi wa ryouri o suru.",
    "traduzione": "Cucino.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Fare spese",
    "romaji": "kaimono",
    "frase": "Kaimono o suru.",
    "traduzione": "Faccio spese.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Dormire",
    "romaji": "neru",
    "frase": "Yoru wa neru.",
    "traduzione": "La notte dormo.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Svegliarsi",
    "romaji": "okiru",
    "frase": "Watashi wa rokuji ni okiru.",
    "traduzione": "Mi sveglio alle sei.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      },
      "ni": {
        "descrizione": "Particella di direzione/oggetto indiretto.",
        "uso": "Indica direzione o ricevente indiretto.",
        "esempio": "Tomodachi ni aimasu.",
        "nota": "Si scrive に ma si legge 'ni'."
      }
    }
  },
  {
    "italiano": "Pranzo",
    "romaji": "hirugohan",
    "frase": "Hirugohan o taberu.",
    "traduzione": "Mangio il pranzo.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Aprire",
    "romaji": "akeru",
    "frase": "Mado o akeru.",
    "traduzione": "Apro la finestra.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Chiudere",
    "romaji": "shimeru",
    "frase": "Doa o shimeru.",
    "traduzione": "Chiudo la porta.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Prestare",
    "romaji": "kasu",
    "frase": "Watashi wa hon o kasu.",
    "traduzione": "Presto un libro.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Prendere in prestito",
    "romaji": "kariru",
    "frase": "Hon o kariru.",
    "traduzione": "Prendo in prestito un libro.",
    "spiegazioni": {
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  },
  {
    "italiano": "Comodo",
    "romaji": "benri",
    "frase": "Konpyuutaa wa benri da.",
    "traduzione": "Il computer è comodo.",
    "spiegazioni": {
      "wa": {
        "descrizione": "Particella del tema.",
        "uso": "Indica l’argomento principale della frase.",
        "esempio": "Watashi wa gakusei desu.",
        "nota": "Si scrive は ma si legge 'wa'."
      },
      "o": {
        "descrizione": "Particella dell’oggetto diretto.",
        "uso": "Indica ciò che riceve l’azione.",
        "esempio": "Ringo o taberu.",
        "nota": "Si scrive を ma si legge 'o'."
      }
    }
  }
];