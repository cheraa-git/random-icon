import { Component } from '@angular/core'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-icon-switch',
  templateUrl: './icon-switch.component.html',
  styleUrls: ['./icon-switch.component.css']
})
export class IconSwitchComponent {
  icon: IconDefinition = this.getRandomIcon()

  getRandomIcon() {
    const iconsList = Object.values(icons) as IconDefinition[]
    const randomIndex = Math.floor(Math.random() * iconsList.length)
    return iconsList[randomIndex]
  }

  setRandomIcon() {
    setTimeout(() => {
      this.icon = this.getRandomIcon()
    }, 3000)
  }
}
