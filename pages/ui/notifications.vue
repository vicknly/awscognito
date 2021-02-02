<script>
/**
 * Notifications component
 */
export default {
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    data() {
        return {
            title: "Notifications",
            items: [{
                    text: "UI Elements",
                },
                {
                    text: "Notifications",
                    active: true,
                },
            ],
            count: 0,
            counter: 0,
        };
    },
    methods: {
        makeToast(variant = null) {
            this.$bvToast.toast("Toast body content", {
                title: `Variant ${variant || "default"}`,
                variant: variant,
                solid: true,
            });
        },
        toast(toaster, append = false) {
            this.counter++;
            this.$bvToast.toast(`Toast ${this.counter} body content`, {
                title: `Toaster ${toaster}`,
                toaster: toaster,
                solid: true,
                appendToast: append,
            });
        },
        linkToast() {
            this.$bvToast.toast(`Toast with action link`, {
                href: "#foo",
                title: "Example",
            });
        },
        popToast() {
            // Use a shorter name for this.$createElement
            const h = this.$createElement;
            // Increment the toast count
            this.count++;
            // Create the message
            const vNodesMsg = h(
                "p", {
                    class: ["text-center", "mb-0"],
                },
                [
                    h("b-spinner", {
                        props: {
                            type: "grow",
                            small: true,
                        },
                    }),
                    " Flashy ",
                    h("strong", "toast"),
                    ` message #${this.count} `,
                    h("b-spinner", {
                        props: {
                            type: "grow",
                            small: true,
                        },
                    }),
                ]
            );
            // Create the title
            const vNodesTitle = h(
                "div", {
                    class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"],
                },
                [
                    h(
                        "strong", {
                            class: "mr-2",
                        },
                        "The Title"
                    ),
                    h(
                        "small", {
                            class: "ml-auto text-italics",
                        },
                        "5 minutes ago"
                    ),
                ]
            );
            // Pass the VNodes as an array for message and title
            this.$bvToast.toast([vNodesMsg], {
                title: [vNodesTitle],
                solid: true,
                variant: "info",
            });
        },
    },
    middleware: "authentication"
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Variant Toast</h4>
                    <p class="card-title-desc">Example of different variant toastr.</p>
                    <b-button @click="makeToast()" class="mb-2">Default</b-button>
                    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
                    <b-button variant="secondary" @click="makeToast('secondary')" class="mb-2">Secondary</b-button>
                    <b-button variant="danger" @click="makeToast('danger')" class="mb-2">Danger</b-button>
                    <b-button variant="warning" @click="makeToast('warning')" class="mb-2">Warning</b-button>
                    <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>
                    <b-button variant="info" @click="makeToast('info')" class="mb-2">Info</b-button>
                </div>
            </div>
        </div>

        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Alignment</h4>
                    <p class="card-title-desc">Example of toastr alignment.</p>
                    <b-button @click="toast('b-toaster-top-right')" class="mb-2">Top-right</b-button>
                    <b-button @click="toast('b-toaster-top-left')" class="mb-2">Top-left</b-button>
                    <b-button @click="toast('b-toaster-top-center')" class="mb-2">Top-center</b-button>
                    <b-button @click="toast('b-toaster-top-full')" class="mb-2">Top-full</b-button>
                    <b-button @click="toast('b-toaster-bottom-right', true)" class="mb-2">Bottom-right</b-button>
                    <b-button @click="toast('b-toaster-bottom-left', true)" class="mb-2">Bottom-left</b-button>
                    <b-button @click="toast('b-toaster-bottom-center', true)" class="mb-2">Bottom-center</b-button>
                    <b-button @click="toast('b-toaster-bottom-full', true)" class="mb-2">Bottom-full</b-button>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Link and Custom</h4>
                    <p class="card-title-desc">Example of toast link and custom content.</p>
                    <b-button @click="linkToast()" variant="light">Toast with link</b-button>
                    <b-button @click="popToast()" variant="light">Custom content</b-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
