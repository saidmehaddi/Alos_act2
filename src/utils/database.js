import {
    writeFileSync
} from 'fs'
import memes from '../../database/memes.json'
import hosts from '../../database/hosts.json'



/**
 * MEMES
 */

export function get_memes() {
    return memes
}

export const get_meme = id => {
    const meme = memes.find(meme => meme.id == id)

    return meme
}


export function add_meme(meme) {
    let new_memes = [
        ...memes,
        {
            ...meme,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_memes)

    writeFileSync("database/memes.json", new_data)

    return new_memes
}


export function update_meme(id, data) {
    let index = memes.findIndex(meme => meme.id == id)
    Object.entries(data).map(([key, value]) => {
        memes[index][key] = value
    });

    const new_data = JSON.stringify(memes)

    writeFileSync("database/memes.json", new_data)

    return memes
}
export function delete_meme(id) {
    let index = podcasts.findIndex(meme => meme.id == id)

    memes.splice(index, 1)
    delete_hosts(id)
    const new_data = JSON.stringify(memes)

    writeFileSync("database/memes.json", new_data)

    return memes
}




/**
 * HOSTS
 */

export function get_hosts() {
    return hosts
}

export const get_meme_hosts = meme_id => {

    return hosts.filter(host => host.meme_id == meme_id)
}

export function add_host(host) {
    let new_hosts = [
        ...hosts,
        {
            ...host,
            "id": Date.now().toString(36)
        }
    ]
    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}

export function delete_hosts(meme_id) {
    let new_hosts = hosts.filter(host => host.meme_id != meme_id)

    const new_data = JSON.stringify(new_hosts)

    writeFileSync("database/hosts.json", new_data)

    return new_hosts
}