class Species {
  constructor(id, data) {
    this.id = id;
    this.nombre = data.name;
    this.clasificacion = data.classification;
    this.designacion = data.designation;
    this.altura_promedio = data.average_height;
    this.colores_piel = data.skin_colors;
    this.colores_pelo = data.hair_colors;
    this.colores_ojos = data.eye_colors;
    this.esperanza_vida_promedio = data.average_lifespan;
    this.idioma = data.language;
    this.creado = data.created;
    this.editado = data.edited;
  }
}
module.exports = Species;
