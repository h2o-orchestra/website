<template>
  <div class="bg-gray-900">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/public" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-32 w-auto" src="/logo-circle.svg" alt=""/>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  @click="openMenu">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 h-32">
          <template v-for="item in navigation">
            <Menu v-if="item.submenu" as="div" class="relative ml-3">
              <div>
                <MenuButton
                    class="relative flex items-center text-sm/6 gap-x-1">
                  <span class="absolute -inset-1.5"/>
                  <span class="sr-only">{{ item.name }}</span>
                  <span class="text-sm/6 font-semibold text-white">{{ item.name }}</span>
                  <span>
                  <ChevronDownIcon class="size-5 flex-none text-white" aria-hidden="true" />
                    </span>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-200"
                          enter-from-class="transform opacity-0 scale-95"
                          enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem v-slot="{ active }" v-for="it in item.submenu">
                    <a :href="'/saison/'+it"
                       :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">
                      {{ it }}
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <a v-else :key="item.name" :href="item.href" class="h-8 text-sm/6 font-semibold text-white">{{ item.name }}</a>
          </template>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end h-32">
          <a href="#" class="text-sm/6 font-semibold text-white">Membres <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-12 w-auto" src="/logo-circle.svg" alt=""/>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">{{
                    item.name
                  }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                   class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800">Membres</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate overflow-hidden pt-14">
      <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="" class="absolute inset-0 -z-10 size-full object-cover"/>
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true">
        <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
                class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span
                class="absolute inset-0" aria-hidden="true"/>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">Data to enrich your
              online business</h1>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Anim aute id magna aliqua ad ad
              non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"
                 class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get
                started</a>
              <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
        <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'

const props = defineProps(['seasons'])

const navigation = [
  {name: 'L\'Orchestre', href: '#'},
  {name: 'Direction musicale', href: '#'},
  {name: 'Concerts', href: '#', submenu: props.seasons},
  {name: 'Media', href: '#'},
  {name: 'Recrutement', href: '#'},
  {name: 'Contacts', href: '#'},
]

const mobileMenuOpen = ref(true)

function openMenu() {
  console.log("clicked")
  mobileMenuOpen.value = true
}
</script>