import { rest } from "msw"
import { setupServer } from "msw/node"
import ListMock1 from "./dataMock/list-mock/ListMock1.json"
import ListMock2 from "./dataMock/list-mock/ListMock2.json"
import bulbasaurData from "./dataMock/details-mock/bulbasaurData.json"
import ivysaurData from "./dataMock/details-mock/ivysaurData.json"
import venusaurData from "./dataMock/details-mock/venusaurData.json"
import charmanderData from "./dataMock/details-mock/charmanderData.json"
import charmeleonData from "./dataMock/details-mock/charmeleonData.json"
import charizardData from "./dataMock/details-mock/charizardData.json"
import squirtleData from "./dataMock/details-mock/squirtleData.json"
import wartortleData from "./dataMock/details-mock/wartortleData.json"
import blastoiseData from "./dataMock/details-mock/blastoiseData.json"
import caterpieData from "./dataMock/details-mock/caterpieData.json"
import metapodData from "./dataMock/details-mock/metapodData.json"
import butterfreeData from "./dataMock/details-mock/butterfreeData.json"

const handlers = [
	rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
		req.url.searchParams.get("limit=12")
		const offset = req.url.searchParams.get("offset")

		if (offset === '12') {
			return res (ctx.status(200), ctx.json(ListMock2))
		} else {
			return res (ctx.status(200), ctx.json(ListMock1))
		}
	}),

	rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
		const name = req.params.name
		switch (name) {
			case "bulbasaur":
				return res(ctx.json(bulbasaurData))
			case "ivysaur":
				return res(ctx.json(ivysaurData))
			case "venusaur":
				return res(ctx.json(venusaurData))
			case "charmander":
				return res(ctx.json(charmanderData))
			case "charmeleon":
				return res(ctx.json(charmeleonData))
			case "charizard":
				return res(ctx.json(charizardData))
			case "squirtle":
				return res(ctx.json(squirtleData))
			case "wartortle":
				return res(ctx.json(wartortleData))
			case "blastoise":
				return res(ctx.json(blastoiseData))
			case "caterpie":
				return res(ctx.json(caterpieData))
			case "metapod":
				return res(ctx.json(metapodData))
			case "butterfree":
				return res(ctx.json(butterfreeData))
			default:
				return res(ctx.status(404))
		}
	}),
]

export const server = setupServer(...handlers)