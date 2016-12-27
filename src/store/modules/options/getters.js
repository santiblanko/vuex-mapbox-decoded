export default {
  getLat: state => state.lat,
  getLng: state => state.lng,
  getZoom: state => state.zoom,
  getLabels: state => state.labels,
  getRotation: state => state.rotation,
  getMode: state => state.mode,
  getLoading: state => state.loading,
  getPitch: state => state.pitch,
  getCenter: state => [state.lat, state.lng],
  getToken: state => state.token
}
