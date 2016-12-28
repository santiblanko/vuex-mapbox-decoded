export default {
  CHANGE_LAT (state, lat) {
    state.lat = lat
  },
  CHANGE_LNG (state, lng) {
    state.lng = lng
  },
  CHANGE_ZOOM (state, zoom) {
    state.zoom = zoom
  },
  LOADING (state, loading) {
    state.loading = loading
  },
  CHANGE_ROTATION (state, rotation) {
    state.rotation = rotation
  },
  CHANGE_LABELS (state, labels) {
    state.labels = labels
  },
  CHANGE_MODE (state, mode) {
    state.mode = mode
  },
  CHANGE_PITCH (state, pitch) {
    state.pitch = pitch
  }
}
