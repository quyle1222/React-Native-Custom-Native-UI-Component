//
//  View.swift
//  appClone
//
//  Created by TuPT on 08/11/2022.
//

import UIKit
import AVFoundation
import React
class NativeViewCustom: UIView {
  private var rootFrame:CGRect = CGRect() {
    didSet{
      self.setupView()
    }
  }
  @objc var url:String?{
    didSet{
      self.setupView()
    }
  }
  var numberLabel:UILabel!
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupView()
  }
  
  override func reactSetFrame(_ frame: CGRect) {
    super.reactSetFrame(frame)
    self.rootFrame = frame
  }
    
  func setupView(){
    guard let url = url, rootFrame != CGRect() else {return}
    self.frame = rootFrame
    self.layer.sublayers?.removeAll()
    let videoURL = URL(string: url)
    let player = AVPlayer(url: videoURL!)
    let playerLayer = AVPlayerLayer(player: player)
    self.layoutIfNeeded()
    playerLayer.frame = self.bounds
    playerLayer.videoGravity = .resize
    self.layer.addSublayer(playerLayer)
    DispatchQueue.main.async {
      player.play()
    }
  }
}
