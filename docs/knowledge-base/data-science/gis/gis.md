---
title: GIS
---

## Spatial projection

| ESPG Code  | Projection                      | Unit   |
| ---------- | ------------------------------- | ------ |
| ESPG:4240  | THAILAND                        | Degree |
| ESPG:4326  | WGS84                           | Degree |
| EPSG:3857  | GOOGLE                          | Meter  |
| ESPG:32647 | WGS84 / UTM zone 47N - THAILAND | Meter  |

## BMA zone

```python
["กรุงเทพมหานคร", "นครปฐม", "นนทบุรี", "ปทุมธานี", "สมุทรปราการ", "สมุทรสาคร"]
```

## Degree / meter conversion

```python
KM = DEGREE * 111.319
DEGREE = KM / 111.319
```

### Example

```
15 km = 0.135 degree
10 km = 0.09 degree
6 km = 0.054 degree
4 km = 0.036 degree
3 km = 0.027 degree
```

## Basemap tile

- [CartoDB/basemap-styles](https://github.com/CartoDB/basemap-styles)

## Tools

- [docker-cartodb](https://github.com/sverhoeven/docker-cartodb) - Dockerized CartoDB.
- [h3](https://github.com/uber/h3) - Hexagonal hierarchical geospatial indexing system.
- [kepler.gl](https://kepler.gl/demo) - A data-agnostic, high-performance web-based application for visual exploration of large-scale geolocation data sets.
- [prettymaps](https://github.com/marceloprates/prettymaps) - A small set of Python functions to draw pretty maps from OpenStreetMap data. Based on osmnx, matplotlib and shapely libraries.

## Resources

- [OpenStreetMap Data Extracts](http://download.geofabrik.de/index.html)
