import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name: "Link",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description");
        t.nonNull.string("url");
    }
});

let links: NexusGenObjects["Link"][] = [
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    }
];

export const LinkQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            type: "Link",
            resolve(parent, args, context, info) {
                return links;
            },
        });
    },
});

export const LinkMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("post", {
            type: "Link",
            args: {
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },
            resolve(parent, args, context) {
                const { description, url } = args;
                let idCount = links.length + 1;
                const link = {
                    id: idCount,
                    description: description,
                    url: url
                }
                links.push(link);
                return link;
            },
        });

        t.nonNull.field("updateLink", {
            type: "Link",
            args: {
                id: nonNull(intArg()),
                description: stringArg(),
                url: stringArg()
            },
            resolve(parent, args, context) {
                const { id, description, url } = args;
                const link = links.find(
                        e => e["id"] == id
                ) as NexusGenObjects["Link"];
                link["description"] = description || link["description"];
                link["url"] = url || link["url"];
                return link;
            }
        });

        t.nonNull.field("GetLink", {
            type: "Link",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parent, args, context) {
                const { id } = args;
                const link = links.find(
                        e => e["id"] == id
                ) as NexusGenObjects["Link"];
                return link;
            }
        });

        t.nonNull.field("DeleteLink", {
            type: "Link",
            args: {
                id: nonNull(intArg()),
            },
            resolve(parent, args, context) {
                const { id } = args;
                const idx:number = links.findIndex(e => e["id"] == id);
                const link:NexusGenObjects["Link"] = links[idx];
                if (idx != -1) {
                    links.splice(idx, 1);
                }
                return link;
            }
        });
    }
});