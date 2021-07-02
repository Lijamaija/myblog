---
title: "Huge files processing and conversion to parquet format"
date: "2021-04-09"
description: "Key moments when working with csv files, python and conversion"
---

### Pandas, pyarrow, pyspark and dask comparison.

>Common issues while converting big files(csv to parquet):
-data corruption
-row sizes, problems with headers
-problems with memory
-problems with datatypes

>Ways to fix common issues:
- adding arguements in read_csv function:
engine = "python"
low_memory = "false"
