# NELA-GT-2018

## Dataset Articles

The articles gathered in this dataset is found in an sqlite database. The database has one table name `articles`. This table has 4 textual columns:

1. `date`: Date of article in `yyyy-mm-dd` format.
1. `source`: Source of article.
1. `name`: Title of article.
1. `content`: Clean text content of article.

The rows of the article are sorted first with respect to `date` and then with respect to `source`.

The dataset's articles are also provided in plain-text files, with file-structure and file naming convension:
```
date/
	source/
		<source>--<date>--<title>.txt
```

## Dataset Labels

The labels of sources are stored in a comma-seperated file *labels.csv* and in a human-readable format in *labels.txt*. Each row in the files contain information about a source. 
The column names use the naming convention `<site_name>,<label_name>`, where `<site_name>` is the name of the site providing the label and `<label_name>` is the name of the particular label. The following lists all columns in the labels files. The columns use different value, which is described below. Note that all columns can also have missing value (no data for that particular source).

1.  Source names
  	**NewsGuard labels:**
1. NewsGuard, Does not repeatedly publish false content `1 true, 0 false`
2. NewsGuard, Gathers and presents information responsibly `1 true, 0 false`
3. NewsGuard, Regularly corrects or clarifies errors `1 true, 0 false`
4. NewsGuard, Handles the difference between news and opinion responsibly `1 true, 0 false`
5. NewsGuard, Avoids deceptive headlines `1 true, 0 false`
6. NewsGuard, Website discloses ownership and financing `1 true, 0 false`
7. NewsGuard, Clearly labels advertising `1 true, 0 false`
8. NewsGuard, Reveals who's in charge, including any possible conflicts of interest `1 true, 0 false`
9. NewsGuard, Provides information about content creators `1 true, 0 false`
10. NewsGuard, score `0-100`
11. NewsGuard, overall_class `1 good, 0 bad`
	**Pew Research Center**
12. Pew Research Center, known_by_40% `1 true, 0 false`
13. Pew Research Center, total `1 trusted, 0 undecided, -1 not trusted`
14. Pew Research Center, consistently_liberal `1 trusted, 0 undecided, -1 not trusted`
15. Pew Research Center, mostly_liberal `1 trusted, 0 undecided, -1 not trusted`
16. Pew Research Center, mixed `1 trusted, 0 undecided, -1 not trusted`
17. Pew Research Center, mostly conservative `1 trusted, 0 undecided, -1 not trusted`
18. Pew Research Center, consistently conservative `1 trusted, 0 undecided, -1 not trusted`
	**Wikipedia**
19. Wikipedia, is_fake `1 marked`
	**Open Sources**
20. Open Sources, reliable `# tag`
21. Open Sources, fake `# tag`
22. Open Sources, unreliable `# tag`
23. Open Sources, bias `# tag`
24. Open Sources, conspiracy `# tag`
25. Open Sources, hate `# tag`
26. Open Sources, junksci `# tag`
27. Open Sources, rumor `# tag`
28. Open Sources, blog `# tag`
29. Open Sources, clickbait `# tag`
30. Open Sources, political `# tag`
31. Open Sources, satire `# tag`
32. Open Sources, state `# tag`
	**Media Bias / Fact Check**
33. Media Bias / Fact Check, label `label`
34. Media Bias / Fact Check, factual_reporting `bad 1 - 5 good`
35. Media Bias / Fact Check, extreme_left `1 true, 0 false`
36. Media Bias / Fact Check, right `1 true, 0 false`
37. Media Bias / Fact Check, extreme_right `1 true, 0 false`
38. Media Bias / Fact Check, propaganda `1 true, 0 false`
39. Media Bias / Fact Check, fake_news `1 true, 0 false`
40. Media Bias / Fact Check, some_fake_news `1 true, 0 false`
41. Media Bias / Fact Check, failed_fact_checks `1 true, 0 false`
42. Media Bias / Fact Check, conspiracy `1 true, 0 false`
43. Media Bias / Fact Check, pseudoscience `1 true, 0 false`
44. Media Bias / Fact Check, hate_group `1 true, 0 false`
45. Media Bias / Fact Check, anti_islam `1 true, 0 false`
46. Media Bias / Fact Check, nationalism `1 true, 0 false`
	**Allsides**
47. Allsides, bias_rating `rating label`
48. Allsides, community_agree `# votes agreeing`
49. Allsides, community_disagree `# votes disagreeing`
50. Allsides, community_label `agreement label`
	**BuzzFeed**
51. BuzzFeed, leaning `left, right`
	**Politifact**
52. PolitiFact, Pants on Fire! `# counts`
53. PolitiFact, False `# counts`
54. PolitiFact, Mostly False `# counts`
55. PolitiFact, Half-True `# counts`
56. PolitiFact, Mostly True `# counts`
57. PolitiFact, True `# counts`

