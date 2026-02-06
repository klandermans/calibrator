# Dynamisch Kalibratie Formulier

Een lichtgewicht, data-driven kalibratietool voor weegsystemen. Dit formulier genereert dynamisch invoervelden op basis van hardware-configuraties en berekent realtime afwijkingen.

## 🛠 Functionaliteiten

- **Dynamische UI**: Genereert tabellen op basis van groepen, types en systeemnummers.
- **Dual-Mode Berekening**:
    - **Relatief (met 0-punt)**: Voor systemen die tarreren. De afwijking wordt berekend t.o.v. de nul-meting.
    - **Absoluut (zonder 0-punt)**: Directe vergelijking tussen invoer en doelgewicht (bijv. 3x10g checks).
- **Realtime Validatie**: Berekent direct de maximale procentuele afwijking per rij.
- **Visuele Feedback**: Resultaten kleuren rood bij overschrijding van de geconfigureerde drempelwaarde (`maxAllowed`).

## ⚙️ Configuratie

De logica wordt gestuurd door de `config` array in de JavaScript.

| Parameter | Type | Omschrijving |
| :--- | :--- | :--- |
| `group` | string | De fabrikant of hoofdcategorie (bijv. 'hokofarm'). |
| `type` | string | Het specifieke type systeem of meting. |
| `weights` | array | De ijkpunten/gewichten in grammen. |
| `maxAllowed`| float | De tolerantie drempel in procenten (bijv. `2.0`). |
| `ids` | array | Lijst met unieke systeemnummers/ID's. |

## 🧪 Berekeningslogica

1. **Relatieve Afwijking (Tarra)**:
   $$\text{Fout } \% = \left| \frac{(\text{Gemeten} - \text{Nulstand}) - \text{Doelgewicht}}{\text{Doelgewicht}} \right| \times 100$$

2. **Absolute Afwijking**:
   $$\text{Fout } \% = \left| \frac{\text{Gemeten} - \text{Doelgewicht}}{\text{Doelgewicht}} \right| \times 100$$

Het formulier toont altijd de **hoogste** afwijking gevonden binnen de verschillende ijkpunten van een rij.

## 🚀 Gebruik

1. Open de `index.html` in de browser.
2. Selecteer een **Groep** en vervolgens een **Type**.
3. Vul de gemeten waarden in de gegenereerde tabel in.
4. De kolom **Max Afwijking (%)** update automatisch en kleurt rood bij fouten buiten de marge.

## 🛡 KISS Principes

- Geen externe libraries of dependencies (Vanilla JS).
- CSS is embedded voor eenvoudige distributie.
- Plug-in replacement architectuur: de tabel herstelt zichzelf bij wijziging van configuratie.

- 
