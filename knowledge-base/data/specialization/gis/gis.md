---
outline: deep
---

# GIS

## References

### BMA zone

```python
["กรุงเทพมหานคร", "นครปฐม", "นนทบุรี", "ปทุมธานี", "สมุทรปราการ", "สมุทรสาคร"]
```

### Degree / meter conversion

For Thailand

```python
KM = DEGREE * 111.319
DEGREE = KM / 111.319
```

```bash
3 km = 0.027 degree
4 km = 0.036 degree
6 km = 0.054 degree
10 km = 0.09 degree
15 km = 0.135 degree
```

### Spatial projection

<https://epsg.io/>

| ESPG Code  | Projection                      | Unit   |
| ---------- | ------------------------------- | ------ |
| ESPG:4240  | THAILAND                        | Degree |
| ESPG:4326  | WGS84                           | Degree |
| EPSG:3857  | GOOGLE                          | Meter  |
| ESPG:32647 | WGS84 / UTM zone 47N - THAILAND | Meter  |

### Bounding Box

- <https://wiki.openstreetmap.org/wiki/Bounding_Box>

```bash
| Target                 | Value      |
| ---------------------- | ---------- |
| left topmost point     | xmin, ymin |
| right bottommost point | xmax, ymax |
| top rightmost point    | xmax, ymin |
| left bottommost point  | xmin, ymax |
```

## Data

- [OpenStreetMap Data Extracts](http://download.geofabrik.de/index.html)
- [Overture Maps](https://overturemaps.org/)
- [Protomaps](https://protomaps.com/)
- [Source Cooperative - geoparquet](https://beta.source.coop/repositories/?tags=geoparquet)
- [geoBoundaries](https://www.geoboundaries.org/)
- [geoBoundaries](https://www.geoboundaries.org/)

### Tile

- [CartoDB/basemap-styles](https://github.com/CartoDB/basemap-styles)
- [MapTiler Data](https://data.maptiler.com/downloads/planet/)
- [OpenMapTiles](https://openmaptiles.org/) - World maps you can self-host - powered by free OpenStreetMap vector tiles and open-source software.
- [Protomaps](https://protomaps.com/) - A free and open source map of the world.

```yaml
OpenStreetMap: http://tile.openstreetmap.org/{z}/{x}/{y}.png
Google Maps: https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}
Google Roads: https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}
Google Satellite: https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
Google Hybrid: https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
Google Terrain Only: https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}
Google Terrain: https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}
Google Traffic: https://mt1.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}
Carto Light: http://d.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png
```

## Tools

### Indexing

- [h3](https://github.com/uber/h3) - Hexagonal hierarchical geospatial indexing system.
  - [h3-viewer](https://github.com/clupasq/h3-viewer) - View Uber H3 Hexagons on a map.
  - [https://github.com/uber/h3-py](https://github.com/uber/h3-py)
- [GERS](https://overturemaps.org/gers/) - Overture’s Global Entity Reference System (GERS) is an ID system for geospatial entities. GERS makes data sharing, onboarding, and joining easier via common, open, accessible IDs.

### Server

- [tileserver-gl](https://github.com/maptiler/tileserver-gl) - Vector and raster maps with GL styles. Server side rendering by MapLibre GL Native. Map tile server for MapLibre GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc.
- [QGIS server](https://docs.qgis.org/3.28/en/docs/server_manual/index.html)

### bbox

- [Bounding Box Tool](https://boundingbox.klokantech.com/) - Metadata Enrichment for Catalogue Records by Visually Selecting Geographic Coordinates (Latitude / Longitude) for Maps.

### Visualizations

- [kepler.gl](https://kepler.gl/demo) - A data-agnostic, high-performance web-based application for visual exploration of large-scale geolocation data sets.

### Web

- [openlayers](https://github.com/openlayers/openlayers) - High-performance, feature-packed library for creating interactive maps on the web

### Misc

- [Kart](https://docs.kartproject.org/en/latest/index.html) - Distributed version-control for geospatial and tabular data.
- [prettymaps](https://github.com/marceloprates/prettymaps) - A small set of Python functions to draw pretty maps from OpenStreetMap data. Based on osmnx, matplotlib and shapely libraries.

## Resources

- [Geocomputation with Python](https://py.geocompx.org/)
- [Cloud-Optimized Geospatial Formats Guide](https://guide.cloudnativegeo.org)
