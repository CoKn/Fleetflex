Here is a ready-to-paste **Figma Make update prompt**:

---

## Update Prompt for Figma Make

Update the FleetFlex prototype to make the energy plan more operationally credible by adding **vehicle-level dispatch planning** underneath the general energy plan.

Keep the existing high-level **Planned Actions / Fleet Energy Plan** cards, but make them clickable and expandable. The general plan should remain as the executive overview, while the new vehicle-level view proves that FleetFlex can safely execute the plan without disrupting airport operations.

### Rename section

Rename:

**Planned Actions**

to:

**Fleet Energy Plan**

Add a small subtitle:

**High-level plan with vehicle-level dispatch logic**

---

## Add clickable drill-downs to each action card

Each planned action card should include a button:

**View vehicle-level plan**

When clicked, open a side panel or modal showing the exact vehicles included in that action.

---

# 1. Charge Fleet Vehicle-Level Plan

For the **Charge fleet — low/negative prices** card, add a drill-down table.

Title:

**Vehicle-Level Charging Plan**

Subtitle:

**Charging selected vehicles during low-price windows while protecting upcoming airport tasks.**

Table columns:

* Vehicle ID
* Vehicle type
* Current SOC
* Required SOC
* Next task
* Charger type
* Planned action
* Reason

Example rows:

| Vehicle ID | Type           | Current SOC | Required SOC | Next task | Charger type  | Action  | Reason                 |
| ---------- | -------------- | ----------: | -----------: | --------- | ------------- | ------- | ---------------------- |
| GSE-042    | Ground support |         42% |          60% | 16:30     | Bidirectional | Charge  | Needed for later task  |
| VAN-084    | Service van    |         55% |          50% | 19:00     | Bidirectional | Charge  | Cheap price window     |
| BUS-011    | Airport bus    |         68% |          75% | 15:45     | Fast charger  | Protect | Below required reserve |
| GSE-118    | Ground support |         36% |          65% | 18:20     | Bidirectional | Charge  | Operational readiness  |

Add summary KPIs at top:

* Vehicles charging: 64
* Protected vehicles: 14
* Expected energy added: 2.4 MWh
* Estimated charging cost saving: €720

---

# 2. Discharge to Airport Vehicle-Level Plan

For the **Discharge to airport — peak electricity costs** card, add a drill-down table.

Title:

**Vehicle-Level Airport Discharge Plan**

Subtitle:

**Only vehicles above their operational reserve are used to power airport demand.**

Table columns:

* Vehicle ID
* Current SOC
* Minimum SOC
* Available kWh
* Next task
* Planned discharge
* Battery wear cost
* Status

Example rows:

| Vehicle ID | Current SOC | Minimum SOC | Available kWh | Next task | Planned discharge | Battery cost | Status   |
| ---------- | ----------: | ----------: | ------------: | --------- | ----------------: | -----------: | -------- |
| GSE-042    |         82% |         55% |        16 kWh | 04:30     |            12 kWh |        €2.10 | Approved |
| VAN-084    |         91% |         60% |        18 kWh | 06:00     |            14 kWh |        €2.40 | Approved |
| BUS-011    |         67% |         70% |         0 kWh | 02:10     |             0 kWh |           €0 | Excluded |
| GSE-099    |         88% |         58% |        20 kWh | 05:45     |            15 kWh |        €2.70 | Approved |

Add summary KPIs:

* Vehicles discharging: 38
* Vehicles excluded: 22
* Airport demand covered: 1.6 MWh
* Estimated airport savings: €1,230

Add a small rule banner:

**Safety rule active: no vehicle may be discharged below its required SOC for the next airport task.**

---

# 3. Sell Surplus Vehicle-Level Plan

For the **Sell surplus — airport demand covered** card, add a drill-down table.

Title:

**Surplus Energy Dispatch Plan**

Subtitle:

**Only verified surplus capacity is offered to Mainova after airport demand and vehicle readiness are secured.**

Table columns:

* Vehicle ID
* Surplus kWh
* Delivery window
* Minimum SOC protected
* Buyer
* Gross value
* Battery cost
* Net value

Example rows:

| Vehicle ID | Surplus kWh | Delivery window | SOC protected | Buyer   | Gross value | Battery cost | Net value |
| ---------- | ----------: | --------------- | ------------- | ------- | ----------: | -----------: | --------: |
| VAN-084    |      12 kWh | 20:00–22:00     | Yes           | Mainova |       €2.52 |        €0.70 |     €1.82 |
| GSE-099    |      10 kWh | 20:00–22:00     | Yes           | Mainova |       €2.10 |        €0.60 |     €1.50 |
| VAN-112    |      14 kWh | 20:00–22:00     | Yes           | Mainova |       €2.94 |        €0.80 |     €2.14 |

Add summary KPIs:

* Surplus vehicles: 9
* Total surplus energy: 420 kWh
* Suggested buyer: Mainova / BKV partner
* Net expected payout: €53

---

## Add a persistent priority logic banner

Across the dashboard, add a small horizontal stepper at the top:

**1. Protect vehicles → 2. Power airport → 3. Sell surplus**

Highlight the current step depending on the screen.

This should make clear that FleetFlex does not blindly trade energy. It follows operational priority logic.

---

## Add visual indicators

Use status badges:

* **Available**
* **Protected**
* **Charging**
* **Discharging**
* **Surplus candidate**
* **Excluded**

Use color coding:

* Green = available / approved
* Blue = charging / airport energy use
* Orange = surplus trading
* Gray = protected / excluded

Keep the overall design professional, clean, and enterprise SaaS-like.

---

## Key message to communicate

FleetFlex is not only a high-level energy dashboard. It translates day-ahead energy strategy into safe, vehicle-level charging and discharging commands.

The prototype should make this clear:

> **The executive sees the energy plan. The operator can drill down and verify exactly which vehicles are used, protected, excluded, or offered as surplus.**
