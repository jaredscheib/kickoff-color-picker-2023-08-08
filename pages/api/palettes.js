import knex from '../../clients/knex';

export default async (req, res) => {
  console.log(req.method, '/api/palettes', req.body)
  if (req.method === 'GET') {
    const palettes = await knex('palettes')

    res.status(200).json(palettes)
  } else if (req.method === 'POST') {
    const {
      rgb0,
      rgb1,
      rgb2,
      rgb3,
      rgb4,
    } = req.body

    const createdPaletteId = await knex('palettes')
      .insert({ rgb0, rgb1, rgb2, rgb3, rgb4 })

    const [ palette ] = await knex('palettes')
      .where({ id: createdPaletteId })
    console.log('created palette', createdPaletteId, palette)
    res.status(201).json(palette)
  } else if (req.method === 'DELETE') {
    const x = await knex('palettes').delete({ where: { id: req.body.id } })
    console.log(x)
    res.status(200)
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` })
  }
}