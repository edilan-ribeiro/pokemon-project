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
import gastlyData from "./dataMock/details-mock/gastlyData.json"
import haunterData from "./dataMock/details-mock/haunterData.json"
import gengarData from "./dataMock/details-mock/gengarData.json"
import articunoData from "./dataMock/details-mock/articunoData.json"
import laprasData from "./dataMock/details-mock/laprasData.json"
import ghostData from "./dataMock/types-mock/ghostData.json"
import iceData from "./dataMock/types-mock/iceData.json"
import overgrowData from "./dataMock/abilities-mock/overgrowData.json"
import chlorophyllData from "./dataMock/abilities-mock/chlorophyllData.json"


const nameData = {
	"bulbasaur": bulbasaurData,
	"1": bulbasaurData,
	"ivysaur": ivysaurData,
	"2": ivysaurData,
	"venusaur": venusaurData,
	"3": venusaurData,
	"charmander": charmanderData,
	"4": charmanderData,
	"charmeleon": charmeleonData,
	"5": charmeleonData,
	"charizard": charizardData,
	"6": charizardData,
	"squirtle": squirtleData,
	"7": squirtleData,
	"wartortle": wartortleData,
	"8": wartortleData,
	"blastoise": blastoiseData,
	"9": blastoiseData,
	"caterpie": caterpieData,
	"10": caterpieData,
	"metapod": metapodData,
	"11": metapodData,
	"butterfree": butterfreeData,
	"12": butterfreeData,
	"gastly": gastlyData,
	"92": gastlyData,
	"haunter": haunterData,
	"93": haunterData,
	"gengar": gengarData,
	"94": gengarData,
	"articuno": articunoData,
	"144": articunoData,
	"lapras": laprasData,
	"131": laprasData,
   }

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

		return res(ctx.json(nameData[name] || ctx.status(404)))		
	}),

	rest.get('https://pokeapi.co/api/v2/ability/:skillName', (req, res, ctx) => {
		const skillName = req.params.skillName

		switch (skillName) {
			case "overgrow": 
				return res(ctx.json(overgrowData))
			case "chlorophyll":
				return res(ctx.json(chlorophyllData))
			default:
				return res(ctx.status(404))
		}
	}),

	rest.get('https://pokeapi.co/api/v2/type/:type', (req, res, ctx) => {
		const type = req.params.type

		switch (type) {
			case "ice":
				return res(ctx.json(iceData))	
			case "ghost":
				return res(ctx.json(ghostData))
			default:
				return res(ctx.status(404))
			}
	})
]

export const server = setupServer(...handlers)