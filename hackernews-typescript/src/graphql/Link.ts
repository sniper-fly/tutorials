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
    },
];

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(parent, args, context, info) {
        return links;
      }
    });
    t.field("link", {
      type: "Link",
      args: {
        id: nonNull(intArg()),
      },
      resolve(parent, args, context) {
        const { id } = args;
        const link = links.find(e => e.id == id);
        return link ?? null;
      }
    });
  }
});

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { description, url } = args;
        let idCount = links.length + 1;
        const link = {
          id: idCount,
          description: description,
          url: url,
        };
        links.push(link);
        return link;
      }
    })

    t.field("updateLink", {
      type: "Link",
      args: {
        id: nonNull(intArg()),
        url: stringArg(),
        description: stringArg()
      },
      resolve(parent, args, context) {
        const { id, url, description } = args;
        const idx = links.findIndex(link => link.id === id);
        links[idx].url = url ?? links[idx].url;
        links[idx].description = url ?? links[idx].description;
        return links[idx];
      }
    });

    t.field("deleteLink", {
      type: "Link",
      args: {
        id: nonNull(intArg()),
      },
      resolve(parent, args, context) {
        const { id } = args;
        const link = links.find(link => link.id === id);
        const idx = links.findIndex(link => link.id === id);
        links.splice(idx, 1);
        return link ?? null;
      }
    });
  },
});
