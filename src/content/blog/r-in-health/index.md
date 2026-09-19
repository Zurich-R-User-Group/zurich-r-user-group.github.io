---
title: "R in Healthcare @ SWICA, Winterthur"
toc: false
draft: false
snippet: "The Zurich R User Group met at SWICA in Winterthur for an evening on R and healthcare — from value-based care at a major health insurer, to resource planning across cantons at the Swiss Health Observatory, to statistical modelling for organ transplants at Swisstransplant."
cover: "./eva-blozik-swica.jpg"
coverAlt: "Eva Blozik (SWICA) presenting on value-based healthcare"
publishDate: "2026-09-16"
category: "Event Report"  # should be one of News, Event Report, R Highlight
tags: [zrug, health, insurance, SWICA, Obsan, Swisstransplant]
---

Switzerland has some of the best health outcomes in the world -- and one of the most expensive systems to run. Making better use of health data is central to improving population health and keeping costs in check, and R is playing a growing role on both sides of that equation. For our September meetup, **we looked at R and healthcare from three angles**: how [SWICA](www.swica.ch), a major Swiss health insurer, shifts towards Value-Based Healthcare, how the [Swiss Health Observatory (Obsan)](https://www.obsan.admin.ch/en) plans and allocates resources across cantons, and how [Swisstransplant](https://www.swisstransplant.org/de/), a national foundation, uses statistical modelling to understand and predict organ transplants.

Around 60 R-enthusiasts and members of the Zurich R User Group gathered in Winterthur for the evening. A big thank you goes to **SWICA** for hosting us at the **Hotel Banana City in Winterthur**, and to **Aurélien** and **Sereina** for leading the organization of the evening.

![Eva Blozik (SWICA) presenting on value-based healthcare](./health_r_1.jpg)

## R for an efficient and qualitative health care system (Eva Blozik, SWICA)

Eva Blozik, Head of Healthcare Management at SWICA, opened the evening with the insurer's perspective on how data analysis drives Value Based Healthcare. Her team combines public health evaluations, in-house analyses, and economic analyses on top of a shared data warehouse, with R playing an important role in the analytical pipeline.

## R for health policy planning -- from Copy-Paste to Pipelines (Jonathan Zufferey & Reto Jörg, Obsan)

Jonathan Zufferey and Reto Jörg from the **Swiss Health Observatory (Obsan)** walked us through two projects that show how R is reshaping health policy analytics in Switzerland.

The first was Obsan's **cantonal health reports** based on the Swiss Health Survey. What used to be a manual chain of SAS exports, Excel copy-paste and Word assembly -- repeated for every canton -- is now a fully integrated R workflow that produces both a web output and a PDF report from the same source. Jonathan took us through the transition from static, manual document assembly to an end-to-end reproducible publishing pipeline.

<!--
- swiss health survey (SHS), health reports based on 50 key vars
- reports: tables, viz: bar and spatial maps -> 150 p. bi-lang
- 8-12 reports (cantonal level)
- past: SAS, Excel, many sheets -> templates
- new architect: JS, R, Report Content Dev
-->

The second project was the **Primary Care Monitoring System**, a Floating Catchment Area (FCA) model of regional disparities in access to primary care. Provider capacity comes from health insurance claims, demand is modelled from population and commuter flows, and accessibility is derived from road-network travel times -- with DuckDB doing the heavy lifting. Reto mentioned the challenges of working with a pipeline combining huge tariff data with distance information as a basis for spatial analysis of access to care (10 billion distances in ~ 40’000 parquet files). Their solution: a pipeline built around duckdb + DBI, which processes large datasets locally without loading everything into R’s memory.


👉 Have a look at the Cantonal Health Reports [here](https://kgr.obsan.ch/) \
👉 Link to the slides [here]()

<!--
- challenges: tariff inputs 120 GB, 40K parquet files
- kindergarden hardware setup
- DuckDB as a game changer
-->

<!-- PERSONAL NOTE: pipeline details worth calling out, the before/after contrast that landed with the audience, any tooling choices (Quarto? targets? DuckDB tricks?) and questions from the crowd.
-->

![Jonathan Zufferey, Reto Jörg and Simon Schwab](./r_health_5.jpg)


## R for predicting kidney transplant success (Simon Schwab, Swisstransplant)

Simon Schwab closed the technical part of the evening with the **KIDMO project** (Kidney Prediction Model) at Swisstransplant. In 2025, 292 deceased-donor kidney transplants were performed in Switzerland, while more than 880 patients remained on the national waiting list at year-end. Even with excellent overall outcomes, graft loss remains a major concern -- and a good target for statistical prediction.

Simon walked us through the model development and validation pipeline, and showed how a clinical prediction model can be turned into a practical tool: an R package plus an online risk calculator built with Shiny, Quarto and Posit Connect Cloud. He shared his experience on working with the tool and the value of interpreting the predictions together with physicians, and gave us valuable insight on finding the right balance between medical relevance and statistical accuracy.

👉 Link to the slides [here](https://data.swisstransplant.org/slides_kidmo/)

<!-- PERSONAL NOTE: modelling approach, validation strategy, the live demo of the calculator, and how the clinical audience might use it. -->

## Apéro & Networking

After the talks, we moved to our traditional apéro -- the part of every ZRUG evening where the actual bandwidth between attendees really opens up.

<!-- PERSONAL NOTE: conversations at the apéro, who you met, any recurring themes (data access, real-world evidence, hiring, tooling), and anything you'd like to follow up on in a future meetup. -->

## Thanks

Thanks again to **SWICA** for hosting and sponsoring the evening, to **Eva Blozik**, **Jonathan Zufferey**, **Reto Jörg** and **Simon Schwab** for their talks, and to everyone who came out to Winterthur. See you at the next one!

<!-- Optional: add links to slides once available, and to the speakers' projects (SWICA, Obsan, Swisstransplant, KIDMO). -->
