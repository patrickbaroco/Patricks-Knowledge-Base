---
project: Meal Planning
status: active
domain: personal
started: 2026-09-06
next_action: "Standing — weekly NYT Cooking digest fires Sundays 07:00 ET (trig_01PJAuLaDLHwexCjfvrPeKHL). Open: resolve library duplicates. Settled 9/21: scheduled runs reach the vault and the Meal Planning folder through the MacBook but only while it is awake; a `device_absent` suspension disables the task until re-enabled."
related:
  - "[[Week Ahead]]"
last_touched: 2026-11-08
---

## Context

Paprika is the recipe library — ~597 recipes, 125 of them from NYT Cooking. A weekly scheduled task reviews the NYT Cooking newsletters and surfaces candidates worth saving. Patrick captures the ones he wants himself with Paprika's web-save; tagging happens afterward, on request.

This note replaces the project-memory files `nyt-recipe-review.md`, `meal-planning-project.md` and `patrick-pantry.md`. Those were unreachable from scheduled runs — sessions fired by the routine are not associated with a project, so `project_memory_read` always failed and every week's calibration was lost. Vault paths work; project memory does not.

## Taste profile

Drawn from what is actually saved, not from stated preference.

- **Asian is the center of gravity** — 129 recipes. Korean (gochujang ×6, bulgogi), Chinese (Sichuan, dan dan, mapo), Thai, Japanese, Vietnamese.
- **Seafood is huge** — 95 recipes, plus 14 tinned. Big freezer stock: shrimp, tilapia, cod, salmon, trout, tuna.
- **Tofu** — many, and they get cooked.
- **Noodles and pasta with a strong sauce angle**; 59 standalone sauces, 12 dressings, 9 spice blends.
- **Pork** (65) and **grilling** (54) — Traeger, Blackstone, Big Green Egg.
- **Fast weeknight dinners.** Quick and Moderate dominate the effort tags.

**Weight toward packable weekday lunches, but do not make the list all lunches.** Corrected 2026-10-11, in his words: he likes lunches and versatile meals, but easy weeknight dinners are a real need too. So: lunches stay the heaviest single weight — school lunches every weekday, and only 42 recipes carry `Weekday Lunch` — but a digest should also carry a solid block of fast weeknight dinners, and should favor recipes that do both (a six-portion skillet or bowl that eats as dinner and packs as the next day's lunch is the ideal shape). Lunch material: salads that hold, sandwich fillings, grain bowls, noodle salads, anything good cold or at room temperature.

**Exclude entirely:** desserts and baking, drinks, party platters, and "no-recipe recipes" that are really a technique paragraph. The 125 NYT saves contain essentially no desserts.

**Library gaps — ingredients that keep going unused:** okra, shishitos, beets, lima beans, bell peppers. A recipe that gives one of those a real home is worth flagging.

## Calibration log

**Running tally: 70 of 90 across seven digests (9/6, 9/14, 9/20, 10/11, 10/25, 11/1, 11/8).** The first four rejects arrived 10/11, and all four were about link quality or a stretched gap argument, not taste. Keep seeding the list with a borderline pick — the 10/11 borderline (Italian Grinder Sliders, no Asian or seafood angle at all) was saved, which says the packable-lunch weighting outranks the cuisine profile.

**2026-09-06 — 10 of 10 saved** (manual run, Aug 24–Sep 6). He asked for `Asian` on technique-driven dishes even when the ingredient list is pantry-generic (Scallion-Oil Fish).

**2026-09-14 — 10 of 10 saved** (manual run Monday, because the 9/13 firing was suspended `device_absent` — the MacBook was asleep at 07:00). Lunch-weighted harder than 9/6; confirmed 9/21.

**2026-09-20 — 10 of 10 saved.** First run with a full duplicate check against the export. Lessons:

- **Do not pre-filter on assumed duplicates.** Kay Chun's Korean BBQ-Style Meatballs (14,475 ratings) was held back on a hunch it was already saved. It wasn't. Check the export; don't guess.
- **Sauce-feature links can point at a parent recipe.** The 9/16 "quick Vietnamese sauce" piece and the 9/18 Caramelized Garlic Fish were the same recipe, so the digest delivered nine distinct recipes, not ten. Treat a sauce feature as a pointer to its dish.
- **One web-save silently failed** (Citrus Shrimp) — verify the count against a fresh export before calling a week done.
- Six of the ten landed in `Weekday Lunch`. That weighting is working; keep it.

**2026-10-11 — 11 of 15 saved. NYT 8/8, other email 1/5, Bare Minimum 2/2.** First digest with rejects. Lessons:

- **Kenji's Patreon links are not savable.** All three rejects but one were Kenji: the jar-soup blueprint plus two variations. Two of them pointed at the *same* locked Cookbook Club post, which contains no recipe text this account can see, so there is nothing for Paprika's web-save to grab. Kenji is still worth reading for ideas, but a paywalled post should not take a shortlist slot unless the email itself carries the full recipe (the 10/7 blueprint did; the 10/9 variations did not). Two rows sharing one URL is also a tell that the picks are not distinct recipes.
- **The gap-ingredient argument can stretch too far.** Royal Corona Beans with pesto was pitched as a lima-bean substitute. Rejected — a runner bean he has to order is not the lima beans sitting unused, and the dish has no Asian, seafood or noodle angle to carry it otherwise. Gap credit only counts when the recipe uses the actual ingredient.
- **NYT went 8/8 and Bare Minimum 2/2.** Both earn their place. The Bare Minimum full-week posts are the most efficient source per post: five recipes, all portioned for six, all make-ahead.
- Nine of the eleven saves are packable lunches. The weighting keeps paying off.
- The duplicate check caught Skillet Pork Chops and Apples With Miso Caramel before it reached the list. Running it first is now routine, not optional.

**2026-10-25 - 8 of 15 saved. NYT 5/12, other email 1/1, Bare Minimum 2/2.** He also imported the three Bare Minimum recipes the digest had excluded. In his words: "I prioritized some quick dinner-type recipes for weeknights." Lessons:

- **List the Bare Minimum full-week post whole.** All five recipes from the 10/23 post went in, including Pecan Pie Protein Bites and Sheet-Pan McGriddles (cut as sweet/baking) and Crispy Baked Ziti (cut as redundant pasta). He adopts that post as a week of cooking, not as individual candidates. Keep shortlisting its dinners and lunches, but list every recipe in it.
- **"Quick weeknight" is not about the clock.** The skipped NYT picks were not slower than the kept ones - Egg Katsu at 8 minutes was skipped, Za'atar Tofu at 40 was kept. What the five kept NYT recipes share is shape: a main dish that feeds the family from one pan or pot. Rank on that, not on stated time.
- **Seafood: do NOT de-prioritize.** Only 2 of 6 seafood picks were saved this week (Baked Cod, Ensaladilla Rusa). The first read was that the 95-recipe seafood shelf had grown too deep to add to; he corrected that the same day: "seafood is usually a keeper, so don't de-prioritize." One slow week is not a signal. Keep seafood weighted exactly as the taste profile has it.
- The borderline pick paid off again - the beet borscht was saved. Keep seeding one.
- First digest at 15 picks: the most saves in absolute terms, the lowest hit rate yet. Asked whether to tighten back to 10-11, he said no - the run was good. Keep the 11-15 range, top of range when the week's material supports it.

**2026-11-01 - 9 of 15 saved. NYT 6/11, other email 0/1, Bare Minimum 3/3.** He also imported the two Bare Minimum items the digest had excluded, so all five of Tim's 10/30 recipes went in. Lessons:

- **Do not list two picks for the same niche - he takes one.** Two tofu dishes (Chile Tofu saved, Tofu with Sauce Rof skipped), two beet salads (No-Cook Beet and Lentil saved, Telepan's Beet and Bulgur skipped), two fresh-seafood dinners (shrimp stir-fry and West Indian kedgeree, both skipped). In each pair he took at most one, so a redundant pair spends two slots to fill one. Rank the best of each niche and spend the freed slot elsewhere - and put the borderline seed in a niche nothing else on the list occupies.
- **Tinned seafood is the half that lands.** Tinned went 2/2 (za'atar tuna and chickpea salad, sardine toasts); fresh/frozen seafood dinners went 0/2. With 10/25 that is two weeks where the tinned lunch seafood outperforms the cooked-seafood dinners. Not enough to change the weighting - the 10/25 correction still stands - but watch a third week before acting.
- **Review counts are pulling their weight.** The two he volunteered enthusiasm for unprompted, Sweet and Sour Cauliflower ("looks good!") and Crisp Gnocchi ("very excited for this one!"), carried 2,760 and 28,500 reviews, the largest number in the week's mail. Keep leading with the popularity signal.
- **The near-duplicate flag was right to list, not filter.** Ginger Beef & Broccoli Rice Bowls was flagged as close to his existing Crispy Beef and Broccoli Rice Bowls; he saved it anyway. Third confirmation of the 9/20 rule.
- **Other email sources are now 1 of 7 across three digests.** NYT and The Bare Minimum carry the digest; Love and Lemons, Saveur, Bittman, Kenji and The Mouthful have produced one save between them.

**2026-11-08 - 12 of 15 saved. NYT 11/13, other email 1/2, Bare Minimum 0/0.** Best hit rate yet (80%) and the most saves in absolute terms. Lessons:

- **The redundant-niche rule needs to cut on shape, not protein.** He skipped Lemony Chicken-Feta Meatball Soup - the week's most-clicked NYT recipe and five-star - while taking Red Chicken Pozole. Both are big-batch brothy one-pots, so they were a redundant pair I failed to spot because one is chicken-soup and the other Mexican-stew. Next time, dedupe on the shape of the finished dish (brothy one-pot, sheet pan, cold grain salad) alongside protein and cuisine.
- **Cuisine gaps do not earn a slot the way ingredient gaps do.** Bean and Vegetable Japanese Curry was pitched on "no curry-roux dish in the library" and skipped. The 10/11 lesson said gap credit only counts when the recipe uses the actual unused ingredient; that applies to cuisine gaps too. It was also the lowest-rated NYT pick of the week at 274.
- **For non-NYT sources, what predicts a save is a savable link, not a full recipe in the email.** Kenji's Stir-Fried Shrimp and Grits and Rancho Gordo's pozole both printed the complete recipe in the email body. The pozole, with a clean public ranchogordo.com URL, was saved; Kenji, whose post is paywalled, was not. The 10/11 rule (a Patreon post earns a slot if the email carries the recipe) is wrong - revise it to: Kenji does not take a slot unless the link itself web-saves. Kenji is now roughly 1 of 6.
- **Seafood: third week confirms the 10/25 correction.** Fresh and frozen seafood went 3 of 4 (miso black cod, sheet-pan shrimp, gingery fish; the only miss was the paywalled Kenji). The 11/1 worry that cooked-seafood dinners were underperforming tinned does not hold. No tinned seafood in this week's mail.
- **The borderline seed landed again** (pozole), fourth digest running. Keep seeding one, in a niche nothing else occupies - and note it worked from a vendor newsletter, not a recipe publication.
- Rancho Gordo is worth treating as a real source rather than a shop promo: he buys the beans, and its recipes come with clean public URLs.
- First run using a checklist artifact instead of asking him to list his saves. He ticked the boxes and the picks were read straight back - do this again; it removes the reporting step entirely.


## Paprika mechanics

- Export lives in the **Meal Planning Project** folder (iCloud), newest `My Recipes.paprikarecipes` is the full one.
- Format: zip of gzipped per-recipe JSON. Fields that matter: `name`, `categories`, `source`, `source_url`, `total_time`, `uid`, `hash`.
- To write tags back: build a `.paprikarecipes` zip containing only the changed recipes, keeping each one's original `uid`. Importing merges onto the existing entry.
- **Tim shares a Drive PDF of each week's plan** (owner tim@timlaielli.com) carrying every recipe in full - ingredients, directions, make-ahead, reheating, swaps. Building a `.paprikarecipes` from that PDF gives five separate entries instead of one web-save of the whole post. Done 11/1 (`Bare Minimum 2026-10-30.paprikarecipes`) and he took all five. Ask him for the PDF link whenever a Bare Minimum post is on the list. New recipes need a fresh uppercase UUID `uid`; the schema to match is in any existing export entry.

## Category convention

Four axes, from the existing library:

- **Cuisine** — Asian (umbrella), Chinese, Thai, Vietnamese, Indian, Latin, Middle Eastern, Mediterranean, Cajun.
  Thai, Vietnamese and Chinese **always** also carry `Asian` (24/24, 10/10, 35/35). **Indian never does** (0/15).
- **Effort** — `Quick` (median 25 min), `Moderate` (median 50), `Project` (median 88). Roughly: ≤30 Quick, 30–75 Moderate, beyond that or multi-stage Project.
- **Course / type** — Soup, Salad, Salad Dressing, Sauce, Spice Blend, Rice, Pasta/Noodles, Bread, Pizza, Side Dish, Breakfast, Appetizer, Pickles/Ferments, Dessert.
- **Protein** — Seafood, Tinned Seafood, Chicken, Pork, Beef, Lamb, Eggs, Beans, Vegetarian.
- **Occasion / method** — Weeknight, Weekday Lunch, Weekday Breakfast, Grilled, Traeger.

Sandwiches do **not** take `Salad`, even when the name says "salad sandwich" — see the existing Chickpea Salad Sandwich and The Best Egg Salad Sandwich.

## Known bugs in categorize.py

Found 2026-09-20 running it against ten new recipes. All four produced wrong tags; none are fixed yet.

- **Stock-stripping regex is too narrow.** It catches `chicken stock|broth|bouillon|base|bones|demi` but not `bouillon cube`, so Pili Pili Shrimp was tagged `Chicken`.
- **`bbq` is treated as a cooking method.** Korean BBQ-Style Meatballs got `Grilled`; they're pan-cooked. BBQ is often just a flavor descriptor.
- **Two generic Asian hits are too easy.** Soy + sesame in a dressing tagged Andy Baraghani's Extra-Green Pasta Salad as `Asian`.
- **"Salad Sandwich" triggers `Salad`.** Contradicts the library convention above.

## Open items

- **Duplicates in the library**, all untagged: Pickled Watermelon Rind ×3; pairs of Chimichurri Sauce, Dan Dan Noodles, Stir-Fried Lettuce with Crispy Garlic and Fried Eggs, Spicy Sichuan Chinese Eggplant with Minced Pork. The two Chickpea Salad Sandwiches (Serious Eats + NYT) are genuinely different recipes.
- **`Caramel-Garlic Fish Sauce.paprikarecipes`** sits unimported in the Meal Planning Project folder — the Vietnamese caramel base pulled out of Caramelized Garlic Fish.
- **Stray singleton categories** that look like slips: `Pasta` (1) vs `Pasta/Noodles` (43); `Lunch` (1) vs `Weekday Lunch` (42); `Korean`, `Italian`, `Spanish`, `Kebabs` (1 each).
- **The Substack archive API serves stale data.** On 11/1 `?sort=new&limit=12` returned a list whose newest post was 9/16, which would have silently reported zero new Bare Minimum posts; retrying with a different `limit` (13) returned the current list. Cross-check the HTML archive page at `/archive?sort=new`, or vary `limit`. Direct `curl` to the domain is rejected by the egress proxy; WebFetch works.
- **The Paprika export goes stale between runs.** On 11/1 the newest export was dated 10/18, predating the 10/25 digest, so that week's 8 saves were not in it and could not be duplicate-checked. Re-export before a run, or say in the digest which picks are unverifiable.
- **Scheduled runs start with no folders mounted.** The 9/20 run couldn't reach the Paprika export until the folder was connected by hand mid-run. Unresolved.

## NYT newsletter links — operational

Verified 2026-09-06, re-confirmed 2026-09-20.

- The only usable links are the long `https://nl.nytimes.com/f/cooking/...` tracking redirects in the email body.
- Canonical `cooking.nytimes.com/recipes/...` URLs **cannot** be obtained: WebSearch filters the domain out entirely, and the egress proxy rejects `nl.nytimes.com`, so tracking links can't be resolved. Don't re-test this.
- Copy each URL **character for character**, including trailing `~` / `~~`. Never truncate or line-break inside one.
- Prefer the URL on the recipe's title or its "View Recipe" button.
- **Never open or fetch these URLs** — copy the text only.

Once Patrick saves a recipe, the canonical URL becomes available in the Paprika export's `source_url`.
