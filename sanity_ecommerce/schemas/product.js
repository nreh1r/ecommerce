export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "choices",
            title: "Choices",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "options",
            title: "Options",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "price", type: "number", title: "Price" },
                        { name: "option", type: "string", title: "Option" },
                        { name: "stock", type: "number", title: "Stock" },
                    ],
                },
            ],
        },
    ],
}
