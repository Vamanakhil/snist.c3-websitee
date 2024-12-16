/*

    ! NOTICE: Per leader dict entry, follow this key order. Leave each string value empty if not applicable.
        'role': 'Projects Manager',
        'imgSrc': pfp_projectmanager,
        'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.</p>),
        SOCIALS START HERE
        'linktree': 'https://www.linktr.ee/devalto',
        'instagram': 'https://www.instagram.com/dev_alto',
        'discord': 'https://discordapp.com/users/168406210687533056',
        'github': 'https://www.github.com/dev-alto',
        'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
        'website': 'https://the-devalto-experiments.000webhostapp.com/'

*/

// TODO prepare to add yearly leaderships

import { BiCrown } from 'react-icons/bi'
import { CgCrown } from 'react-icons/cg'
import { GrMoney } from 'react-icons/gr'

import { FaRegHandPeace } from 'react-icons/fa'
import { LuConstruction } from 'react-icons/lu'

import { AiOutlineGlobal } from 'react-icons/ai'

import { PiFeatherDuotone, PiHandshakeBold } from 'react-icons/pi'

const dir_leaderPortraits = '/assets/home/leader_portraits/'

const pfp_president = dir_leaderPortraits + 'tylerkuwadaport.png'
const pfp_vicepresident = dir_leaderPortraits + 'nikhilanand.png'
const pfp_secretary = dir_leaderPortraits + 'vasalaharshitha.png'
const pfp_community = dir_leaderPortraits + 'jayanpintorport.png'
const pfp_technical = dir_leaderPortraits + 'srinivasg.png'

const pfp_rdhead = dir_leaderPortraits + 'christseport.png'

const pfp_organizing = dir_leaderPortraits + 'santoshkammari.png'
const pfp_designing = dir_leaderPortraits + 'sivamaruthi.png'
const pfp_marketing = dir_leaderPortraits + 'vasundara.png'
const pfp_document = dir_leaderPortraits + 'bhargavi.png'
const pfp_none = dir_leaderPortraits + 'noprofile.webp'

export const FALLBACK_QUOTE = (
    <p>
        That was no message. <i>This</i> is a message.
    </p>
)

export const leadership = {
    major: {
        'Nandhan Rao': {
            role: 'President',
            imgSrc: pfp_president,
            quote: (
                <p>
                    Oh, these weren't homemade, they were made in a factory.
                    A bomb factory. They're bombs.
                </p>
            ),
            linktree: '',
            instagram: '',
            discord: '',
            github: '',
            linkedin: '',
            website: '',
            icon: <BiCrown />,
        },
        'Nikhil Anand': {
            role: 'Vice President',
            imgSrc: pfp_vicepresident,
            quote: <p>The future is digital.</p>,
            linkedin: 'https://www.linkedin.com/in/nikhil-anand-94948a25a/',
            instagram: 'https://www.instagram.com/_.waffly._/',
            icon: <CgCrown />,
        },
        'Harshitha V': {
            role: 'General Secretary',
            imgSrc: pfp_secretary,
            quote: (
                <p>
                    Building, Breaking and Learning.
                </p>
            ),
            linkedin: 'https://www.linkedin.com/in/vasala-harshitha-bb15952a3/',
            icon: <PiFeatherDuotone />,
        },
        'Vaman Akhil': {
            role: 'Community Manager',
            imgSrc: pfp_community,
            quote: (
                <p>
                    We all live in a coded world of if-statements... never knowing
                    the conditions of each until interpretation.
                </p>
            ),
            linktree: '',
            instagram: '',
            discord: '',
            github: '',
            linkedin: '',
            website: '',
            icon: <GrMoney />,
        },
        'Srinivas G': {
            role: 'Technical Head',
            imgSrc: pfp_technical,
            quote: (
                <p>
                   First, solve the problem. Then, write the code.
                </p>
            ),
            website: 'https://blog.srinivasgogula.me/',
            icon: <LuConstruction />,
        },
        'Harshan Varma': {
            role: 'Research & Development Head',
            imgSrc: pfp_rdhead,
            quote: ( 
                <p>
                    A true Isaiah Rashad fan.
                </p>
            ),
            linktree: '',
            instagram: '',
            discord: '',
            github: '',
            linkedin: '',
            website: '',
            icon: <FaRegHandPeace />,
        },
        'Santhosh': {
            role: 'Organizing Head',
            imgSrc: pfp_organizing,
            quote: 'Behind the scenes, ahead of the game.',
            linkedin: 'https://www.linkedin.com/in/kammari-santosh-kumar',
            icon: <PiHandshakeBold />,
        },
        'T Siva Maruthi Ganesh': {
            role: 'Designing Head',
            imgSrc: pfp_designing,
            quote: 'One step at a time.',
            instagram: 'https://www.instagram.com/tsmg_125/',
            linkedin: 'https://www.linkedin.com/in/maruthi-ganesh-929988258/',
            icon: <PiHandshakeBold />,
        },
         'B Vasundara': {
             role: 'Marketing Head',
             imgSrc: pfp_marketing,
             quote: 'I’m not a psychopath, I’m a high-functioning sociopath ',
             instagram: 'https://www.instagram.com/bv_894',
             linkedin: 'https://www.linkedin.com/in/b-vasundara-678b86253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
             icon: <PiHandshakeBold />,
         },
         
         'Bhargavi': {
            role: 'Documentation Head',
            imgSrc: pfp_document,
            quote: 'Be the way you are',
            instagram: 'https://www.instagram.com/bhargavi_amidhepuram',
            linkedin: 'https://www.linkedin.com/in/bhargavi-harshini-amidhepuram',
            icon: <PiHandshakeBold />,
        },
    },
    minor: {
        'Web Master': {
            label: 'Prem Sai K',
            color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
            icon: <AiOutlineGlobal />,
        },
    },
}

export default leadership