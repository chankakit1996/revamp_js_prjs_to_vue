<template>
    <div class="modal-menu-slider-wrapper" :class="showNav ? 'show-nav' : ''">
        <nav id="navbar" ref="navRef">
            <div class="logo">
                <img
                    src="https://randomuser.me/api/portraits/men/76.jpg"
                    alt="user"
                />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
        </nav>

        <header>
            <div class="toggle" id="toggle" ref="menuRef">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <h1>My Landing Page</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, amet!
            </p>

            <button class="cta-btn" id="open" ref="signUpRef">Sign Up</button>
        </header>

        <div class="container">
            <h2>What is this landing page about?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia iure accusamus ab consectetur eos provident ipsa est
                perferendis architecto. Provident, quaerat asperiores. Quo esse
                minus repellat sapiente, impedit obcaecati necessitatibus.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente optio officia ipsa. Cum dignissimos possimus et non
                provident facilis saepe!
            </p>

            <h2>Tell Me More</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat eaque delectus explicabo qui reprehenderit? Aspernatur
                ad similique minima accusamus maiores accusantium libero autem
                iusto reiciendis ullam impedit esse quibusdam, deleniti
                laudantium rerum beatae, deserunt nemo neque, obcaecati
                exercitationem sit. Earum.
            </p>

            <h2>Benefits</h2>
            <ul>
                <li>Lifetime Access</li>
                <li>30 Day Money Back</li>
                <li>Tailored Customer Support</li>
            </ul>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quam nostrum, fugiat, itaque natus officia laborum dolorum id
                accusantium culpa architecto tenetur fuga? Consequatur provident
                rerum eius ratione dolor officiis doloremque minima optio
                dignissimos doloribus odio debitis vero cumque itaque excepturi
                a neque, expedita nulla earum accusamus repellat adipisci
                veritatis quam. Ipsum fugiat iusto pariatur consectetur quas
                libero dolor dolores dolorem, nostrum ducimus doloremque placeat
                accusamus iste, culpa quaerat consequatur?
            </p>
        </div>

        <!-- Modal -->
        <div
            class="modal-container"
            id="modal"
            :class="showModal ? 'show-modal' : ''"
        >
            <div class="modal" ref="modalRef">
                <button class="close-btn" id="close" ref="modalCrossRef">
                    <i class="fa fa-times"></i>
                </button>
                <div class="modal-header">
                    <h3>Sign Up</h3>
                </div>
                <div class="modal-content">
                    <p>Register with us to get offers, support and more</p>
                    <form class="modal-form">
                        <div>
                            <label for="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Name"
                                class="form-input"
                            />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Email"
                                class="form-input"
                            />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter Password"
                                class="form-input"
                            />
                        </div>
                        <div>
                            <label for="password2">Confirm Password</label>
                            <input
                                type="password"
                                id="password2"
                                placeholder="Confirm Password"
                                class="form-input"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            class="submit-btn"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'Modal Menu Slider',
    setup(props, { attrs, slots, emit, expose }) {
        const showNav = ref(false);
        const showModal = ref(false);
        const navRef = ref();
        const modalRef = ref();
        const menuRef = ref();
        const signUpRef = ref();
        const modalCrossRef = ref();

        const handler = (e: MouseEvent) => {
            console.log(e.target);
            if (signUpRef.value.contains(e.target)) {
                showModal.value = !showModal.value;
            } else if (
                showModal.value &&
                (!modalRef.value.contains(e.target) ||
                    modalCrossRef.value.contains(e.target))
            ) {
                showModal.value = !showModal.value;
            } else if (menuRef.value.contains(e.target)) {
                showNav.value = !showNav.value;
            } else if (showNav.value && !navRef.value.contains(e.target)) {
                showNav.value = !showNav.value;
            } else {
                return;
            }
        };
        onMounted(() => {
            window.addEventListener('click', handler);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('click', handler);
        });

        return {
            showNav,
            showModal,
            navRef,
            modalRef,
            menuRef,
            signUpRef,
            modalCrossRef,
        };
    },
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
$primary-color: #30336b;
$secondary-color: #be2edd;
$modal-duration: 1s;

.modal-menu-slider-wrapper {
    font-family: 'Lato', sans-serif;
    margin: 0;
    transition: transform 0.3s ease;
    position: relative;

    &.show-nav {
        transform: translateX(200px);
    }
}

nav {
    background-color: $primary-color;
    border-right: 2px solid rgba(200, 200, 200, 0.1);
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    z-index: 100;
    transform: translateX(-100%);

    .logo {
        padding: 30px 0;
        text-align: center;

        img {
            height: 75px;
            width: 75px;
            border-radius: 50%;
        }
    }

    ul {
        padding: 0;
        list-style-type: none;
        margin: 0;

        li {
            border-bottom: 2px solid rgba(200, 200, 200, 0.1);
            padding: 20px;

            &:first-of-type {
                border-top: 2px solid rgba(200, 200, 200, 0.1);
            }

            a {
                color: #fff;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

header {
    background-color: $primary-color;
    color: #fff;
    font-size: 130%;
    position: relative;
    padding: 40px 15px;
    text-align: center;

    h1 {
        margin: 0;
    }

    p {
        margin: 30px 0;
    }
}

button,
input[type='submit'] {
    background-color: $secondary-color;
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 8px 12px;
}

button:focus {
    outline: none;
}

.toggle {
    background-color: var(--secondary-color);
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 8px 12px;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 20px;
    left: 20px;

    > div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 4px 0;
    }
}

.cta-btn {
    padding: 12px 30px;
    font-size: 20px;
}

.container {
    padding: 15px;
    margin: 0 auto;
    max-width: 100%;
    width: 800px;
}

.modal-container {
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &.show-modal {
        display: block;
    }
}

.modal {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    width: 400px;
    animation-name: modalopen;
    animation-duration: $modal-duration;
}

.modal-header {
    background: $primary-color;
    color: #fff;
    padding: 15px;

    h3 {
        margin: 0;
        border-bottom: 1px solid #333;
    }
}

.modal-content {
    padding: 20px;
}

.modal-form {
    div {
        margin: 15px 0;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    .form-input {
        padding: 8px;
        width: 100%;
    }
}

.close-btn {
    background: transparent;
    font-size: 25px;
    position: absolute;
    top: 0;
    right: 0;

    &::after {
        content: '\00d7';
        display: inline-block;
    }
}

@keyframes modalopen {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
